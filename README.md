# Purpose
This package contains a [Nearley](https://nearley.js.org)-grammar for a **R**elational **A**lgebra. The grammar tries to stay as close to [how you would denote an expression in RA](https://en.wikipedia.org/wiki/Relational_algebra) on the blackboard as possible by utilising appropriate unicode symbols.

# Compiling the Grammar
The package comes with a compiled grammar located in `ra.js`.
Utilise the nearley-compiler to create a parser from the `ra.ne` grammar file yourself, if need be. From within the project root:

```shell
./node_modules/nearley/bin/nearleyc.js ra.ne > ra.js
```

You can then include the parser and utilise it as needed. The module features the following properties:

- `grammar`: the raw grammar,
- `compiledGrammar`: the grammar compiled using nearley,
- `createParser()`: a function which creates a [new nearley parser](https://nearley.js.org/docs/parser) from the compiled grammar.

# Sample Input
Just some input strings to give you a feeling for how expressions in this RA look like.
The `ra.ne` serves as "full documentation" of expressions in this grammar.

- `A ∩ B`: intersection of A and B.
- `A - B`: A without B.
- `σ{x=41+1}(A)`: Applying the predicate `x=41+1` to all tuples in `A`.
- `π{[a,b]}(A)`: Selecting only the fields `a` and `b` from the relation `A`.
- `ρ{[x→a,y→b]}(A)`: Renaming the fields `x` and `y` in `A` to `a` and `b` respectively.

# Notes to Myself
Programmatic Interface (if should ever need): https://www.npmjs.com/package/nearley-there
