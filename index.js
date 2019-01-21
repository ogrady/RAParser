const nearley = require("nearley");
const grammar = require("./ra.js");
const compiledGrammar = nearley.Grammar.fromCompiled(grammar);

module.exports = {
    grammar: grammar,
    compiledGrammar: compiledGrammar,
    createParser: () => new nearley.Parser(compiledGrammar)
};