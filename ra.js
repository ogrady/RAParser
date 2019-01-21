// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const { RA } = require("./data_structures.js");
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "Main", "symbols": ["Expression"], "postprocess": id},
    {"name": "Expression", "symbols": ["Operation"], "postprocess": id},
    {"name": "Expression", "symbols": ["Expr"], "postprocess": id},
    {"name": "Expression", "symbols": ["Terminal"], "postprocess": id},
    {"name": "Operation", "symbols": ["UnaryOperation"], "postprocess": id},
    {"name": "Operation", "symbols": ["BinaryOperation"], "postprocess": id},
    {"name": "UnaryOperation", "symbols": ["Selection"], "postprocess": id},
    {"name": "UnaryOperation", "symbols": ["Projection"], "postprocess": id},
    {"name": "UnaryOperation", "symbols": ["Rename"], "postprocess": id},
    {"name": "UnaryOperation", "symbols": ["Not"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Mult"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Div"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Plus"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Minus"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Union"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Intersect"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Without"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["CrossProduct"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Join"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["LOJoin"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["ROJoin"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["FOJoin"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["LSJoin"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["RSJoin"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["And"], "postprocess": id},
    {"name": "BinaryOperation", "symbols": ["Or"], "postprocess": id},
    {"name": "Expr", "symbols": ["Eq"], "postprocess": id},
    {"name": "Expr", "symbols": ["Neq"], "postprocess": id},
    {"name": "Expr", "symbols": ["GT"], "postprocess": id},
    {"name": "Expr", "symbols": ["LT"], "postprocess": id},
    {"name": "Expr", "symbols": ["GTE"], "postprocess": id},
    {"name": "Expr", "symbols": ["LTE"], "postprocess": id},
    {"name": "Eq$subexpression$1", "symbols": [{"literal":"="}]},
    {"name": "Eq$subexpression$1", "symbols": [{"literal":"≡"}]},
    {"name": "Eq", "symbols": ["Expression", "_", "Eq$subexpression$1", "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.EQ(l,r)},
    {"name": "Neq", "symbols": ["Expression", "_", {"literal":"≠"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.NEQ(l,r)},
    {"name": "GT", "symbols": ["Expression", "_", {"literal":">"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.GT(l,r)},
    {"name": "LT", "symbols": ["Expression", "_", {"literal":"<"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.LT(l,r)},
    {"name": "GTE", "symbols": ["Expression", "_", {"literal":"≥"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.GTE(l,r)},
    {"name": "LTE", "symbols": ["Expression", "_", {"literal":"≤"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.LTE(l,r)},
    {"name": "Plus", "symbols": ["Expression", "_", {"literal":"+"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.Plus(l,r)},
    {"name": "Minus", "symbols": ["Expression", "_", {"literal":"-"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.Minus(l,r)},
    {"name": "Mult", "symbols": ["Expression", "_", {"literal":"*"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.Times(l,r)},
    {"name": "Div", "symbols": ["Expression", "_", {"literal":"/"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.DividedBy(l,r)},
    {"name": "Selection", "symbols": [{"literal":"σ"}, "Cond", "_", "Target"], "postprocess": ([o,c,_,t]) => new RA.Selection(c,t)},
    {"name": "Projection", "symbols": [{"literal":"π"}, "Cond", "_", "Target"], "postprocess": ([o,c,_,t]) => new RA.Projection(c,t)},
    {"name": "Rename", "symbols": [{"literal":"ρ"}, "Cond", "_", "Target"], "postprocess": ([o,c,_,t]) => new RA.Rename(c,t)},
    {"name": "Union", "symbols": ["Expression", "_", {"literal":"∪"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.Union(l,r)},
    {"name": "Intersect", "symbols": ["Expression", "_", {"literal":"∩"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.Intersection(l,r)},
    {"name": "Without", "symbols": ["Expression", "_", {"literal":"\\"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.Without(l,r)},
    {"name": "CrossProduct", "symbols": ["Expression", "_", {"literal":"✕"}, "_", "Expression"], "postprocess": ([l,_1,_2,_3,r]) => new RA.CrossProduct(l,r)},
    {"name": "Join", "symbols": ["Expression", "_", {"literal":"⋈"}, "Cond", "_", "Expression"], "postprocess": ([l,_1,_2,cond,_3,r]) => new RA.Join(l,r,cond)},
    {"name": "LOJoin", "symbols": ["Expression", "_", {"literal":"⟕"}, "Cond", "_", "Expression"], "postprocess": ([l,_1,_2,cond,_3,r]) => new RA.LOJoin(l,r,cond)},
    {"name": "ROJoin", "symbols": ["Expression", "_", {"literal":"⟖"}, "Cond", "_", "Expression"], "postprocess": ([l,_1,_2,cond,_3,r]) => new RA.ROJoin(l,r,cond)},
    {"name": "FOJoin", "symbols": ["Expression", "_", {"literal":"⟗"}, "Cond", "_", "Expression"], "postprocess": ([l,_1,_2,cond,_3,r]) => new RA.FOJoin(l,r,cond)},
    {"name": "LSJoin", "symbols": ["Expression", "_", {"literal":"⋉"}, "Cond", "_", "Expression"], "postprocess": ([l,_1,_2,cond,_3,r]) => new RA.LSJoin(l,r,cond)},
    {"name": "RSJoin", "symbols": ["Expression", "_", {"literal":"⋊"}, "Cond", "_", "Expression"], "postprocess": ([l,_1,_2,cond,_3,r]) => new RA.RSJoin(l,r,cond)},
    {"name": "Or", "symbols": ["Expression", "_", {"literal":"∨"}, "_", "Expression"]},
    {"name": "And", "symbols": ["Expression", "_", {"literal":"∧"}, "_", "Expression"]},
    {"name": "Not", "symbols": [{"literal":"¬"}, "Expression"]},
    {"name": "Cond", "symbols": [{"literal":"{"}, "Expression", {"literal":"}"}], "postprocess": ([_1,ex,_2]) => ex},
    {"name": "Target", "symbols": [{"literal":"("}, "Expression", {"literal":")"}], "postprocess": ([_1,ex,_2]) => ex},
    {"name": "Attr", "symbols": ["Ident", {"literal":"."}, "Ident"], "postprocess": ([rel, _, attr]) => new RA.Attribute(rel, attr)},
    {"name": "Alias", "symbols": ["Ident", {"literal":"→"}, "Ident"], "postprocess": ([oname, _, nname]) => new RA.Alias(oname, nname)},
    {"name": "List$subexpression$1", "symbols": [{"literal":"["}, "_", {"literal":"]"}]},
    {"name": "List", "symbols": ["List$subexpression$1"], "postprocess": (_) => []},
    {"name": "List$subexpression$2$ebnf$1", "symbols": []},
    {"name": "List$subexpression$2$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "Expression"]},
    {"name": "List$subexpression$2$ebnf$1", "symbols": ["List$subexpression$2$ebnf$1", "List$subexpression$2$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "List$subexpression$2", "symbols": [{"literal":"["}, "Expression", "List$subexpression$2$ebnf$1", {"literal":"]"}]},
    {"name": "List", "symbols": ["List$subexpression$2"], "postprocess":  ([toks]) => {
            // remove brackets  
            [hd, ...tl] = toks.slice(1,-1);
            // tl is nested one level too deep -> [0]
            return tl[0].reduce((lst,[comma,val]) => lst.concat(val), [hd]);
        }
                 },
    {"name": "Terminal", "symbols": ["decimal"], "postprocess": id},
    {"name": "Terminal", "symbols": ["int"], "postprocess": id},
    {"name": "Terminal", "symbols": ["Attr"], "postprocess": id},
    {"name": "Terminal", "symbols": ["Alias"], "postprocess": id},
    {"name": "Terminal", "symbols": ["List"], "postprocess": id},
    {"name": "Terminal", "symbols": ["Ident"], "postprocess": id},
    {"name": "Ident$ebnf$1", "symbols": []},
    {"name": "Ident$ebnf$1", "symbols": ["Ident$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Ident", "symbols": ["Ident$ebnf$1"], "postprocess": ([s]) => new RA.Ident(s.join(""))}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
