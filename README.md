# Purpose
This package contains a [Nearley](https://nearley.js.org)-grammar for a **R**elational **A**lgebra. The grammar tries to stay as close to [how you would denote an expression in RA](https://en.wikipedia.org/wiki/Relational_algebra) on the blackboard as possible by utilising appropriate unicode symbols.

## Compiling the Grammar
Utilise the nearley-compiler to create a parser from the `ra.ne` grammar file. From within the project root:
`./node_modules/nearley/bin/nearleyc.js ra.ne > ra.js`

You can then include the parser and utilise it as needed. See `test.js` for sample usage. 

# Notes to Myself
## Programmatic Interface (if should ever need)
https://www.npmjs.com/package/nearley-there
