const nearley = require("nearley");
const grammar = require("./ra.js");

var input = [
    "A ∩ B",
    "A - B",
    "σ{x=41+1}(A)",
    "π{[a,b]}(A)",
    "ρ{[x→a,y→b]}(A)",
    "[42,41+1,x=y]"
];

input.forEach((e) => {
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    parser.feed(e);
    console.log("------------------------------------------------------------------------------------");
    console.log(e,parser.results.length == 1);
    console.log(parser.results[0]); 
});
