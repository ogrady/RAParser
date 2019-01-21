var T = {
    OPARAN : "(",
    CPARAN : ")",
    OCURLY: "{",
    CCURLY: "}",
    QUOTE : "'",
    SELECT : "σ",
    PROJECT : "π",
    UNION : "∪",
    INTERSECTION : "∩",
    WITHOUT : "−",
    CROSSPRODUCT : "✕",
    RENAME : "ρ",
    // DIVISION : "÷",
    JOIN : "⋈",
    LOJOIN : "⟕",
    ROJOIN : "⟖",
    FOJOIN : "⟗",
    LSJOIN : "⋉",
    RSJOIN : "⋊",
    AND : "∧",
    OR : "∨",
    NOT : "¬",
    GT: ">",
    GTE : "≥",
    LT: "<",
    LTE : "≤",
    NEQ : "≠",
    EQ : "≡",
    EXISTS : "∃",
    ALL : "∀",
    DIGITS : [1,2,3,4,5,6,7,8,9,0],
    DIGITS_S : "1234567890",
    MINUS : "-",
    PLUS : "+",
    TIMES : "*",
    DIVIDED_BY : "/",
    PERIOD : ".",
    UNDERSCORE : "_",
    ARROW_RIGHT: "→"
};

function ASTNode() {
}

const RA = {
    Node: function() {
        ASTNode.call(this);
    },

    Expression: function() {
        RA.Node.call(this);
    },

    Terminal: function(value) {
        RA.Expression.call(this);
        this.value = value;   
    },

    Ident: function(identifier) {
        RA.Terminal.call(this, identifier);
    },

    Number: function(value) {
        RA.Terminal.call(this, value);
    },

    Integer: function(value) {
        RA.Number.call(this, value);
    },

    Float: function(value) {
        RA.Number.call(this, value);
    },

    String: function(value) {
        RA.Terminal.call(this, value);
    },

    /*Attribute: function(parent, child) {
        RA.Expression.call(this);
        this.parent = parent;
        this.child = child;
    },*/

    BinaryOperation: function(left, op, right) {
        RA.Expression.call(this);
        this.left = left;
        this.op = op;
        this.right = right;
    },

    Projection: function(expression, relation) {
        RA.BinaryOperation.call(this, expression, T.PROJECT, relation);
    },

    Selection: function(expression, relation) {
        RA.BinaryOperation.call(this, expression, T.SELECT, relation);
    },

    // Rename is a whole list of Aliases applied to a relation
    Rename: function(expression, relation) {
        RA.BinaryOperation.call(this, expression, T.RENAME, relation);
    },

    Alias: function(oldname, newname) {
        RA.BinaryOperation.call(this, oldname, T.ARROW_RIGHT, newname);
    }

    Union: function(left, right) {
        RA.BinaryOperation.call(this, left, T.UNION, right);   
    },

    Intersection: function(left, right) {
        RA.BinaryOperation.call(this, left, T.INTERSECTION, right);   
    },

    Without: function(left, right) {
        RA.BinaryOperation.call(this, left, T.WITHOUT, right);   
    },

    CrossProduct: function(left, right) {
        RA.BinaryOperation.call(this, left, T.CROSSPRODUCT, right);   
    },

    _AbstractJoin: function(left, operator, right, predicate) {
        RA.BinaryOperation.call(this, left, operator, right);   
        this.predicate = predicate;
    },

    Join: function(left, right, predicate) {
        RA._AbstractJoin.call(this, left, T.JOIN, right, predicate);   
    },

    LOJoin: function(left, right, predicate) {
        RA._AbstractJoin.call(this, left, T.LOJOIN, right, predicate);   
    },

    ROJoin: function(left, right, predicate) {
        RA._AbstractJoin.call(this, left, T.ROJOIN, right, predicate);   
    },

    FOJoin: function(left, right, predicate) {
        RA._AbstractJoin.call(this, left, T.FOJOIN, right, predicate);   
    },

    LSJoin: function(left, right, predicate) {
        RA._AbstractJoin.call(this, left, T.LSJOIN, right), predicate;   
    },

    RSJoin: function(left, right, predicate) {
        RA._AbstractJoin.call(this, left, T.RSJOIN, right, predicate);   
    },

    And: function(left, right) {
        RA.BinaryOperation.call(this, left, T.AND, right);   
    },

    Or: function(left, right) {
        RA.BinaryOperation.call(this, left, T.OR, right);   
    },

    NEQ: function(left, right) {
        RA.BinaryOperation.call(this, left, T.NEQ, right);   
    },

    EQ: function(left, right) {
        RA.BinaryOperation.call(this, left, T.EQ, right);   
    },

    Plus: function(left, right) {
        RA.BinaryOperation.call(this, left, T.PLUS, right);   
    },

    Minus: function(left, right) {
        RA.BinaryOperation.call(this, left, T.MINUS, right);   
    },

    Times: function(left, right) {
        RA.BinaryOperation.call(this, left, T.TIMES, right);   
    },

    DividedBy: function(left, right) {
        RA.BinaryOperation.call(this, left, T.DIVIDED_BY, right);   
    },

    Attribute: function(left, right) {
        RA.BinaryOperation.call(this, left, T.PERIOD, right);   
    }
};

module.exports = {
    RA: RA
};
