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

    Attribute: function(parent, child) {
        RA.Expression.call(this);
        this.parent = parent;
        this.child = child;
    },

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

    Rename: function(expression, relation) {
        RA.BinaryOperation.call(this, expression, T.RENAME, relation);
    },

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

    Join: function(left, right) {
        RA.BinaryOperation.call(this, left, T.JOIN, right);   
    },

    LOJoin: function(left, right) {
        RA.BinaryOperation.call(this, left, T.LOJOIN, right);   
    },

    ROJoin: function(left, right) {
        RA.BinaryOperation.call(this, left, T.ROJOIN, right);   
    },

    LSJoin: function(left, right) {
        RA.BinaryOperation.call(this, left, T.LSJOIN, right);   
    },

    RSJoin: function(left, right) {
        RA.BinaryOperation.call(this, left, T.RSJOIN, right);   
    },

    And: function(left, right) {
        RA.BinaryOperation.call(this, left, T.AND, right);   
    },

    And: function(left, right) {
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

    Period: function(left, right) {
        RA.BinaryOperation.call(this, left, T.PERIOD, right);   
    }
};

module.exports = {
    RA: RA
};
