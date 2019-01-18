@{%
const { RA } = require("./data_structures.js");
%}

@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace
@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives

Main -> Expression {% id %}

Expression -> Operation    {% id %}
                | Expr     {% id %}
                | Terminal {% id %}

Operation -> UnaryOperation       {% id %}
                | BinaryOperation {% id %}      

UnaryOperation -> Selection  {% id %}
                | Projection {% id %}
                | Rename     {% id %}
                | Not        {% id %}

BinaryOperation -> Mult     {% id %}
                | Div       {% id %}
                | Plus      {% id %}
                | Minus     {% id %}
                | Union     {% id %}
                | Intersect {% id %}
                | Without   {% id %}
                | Join      {% id %}
                | LOJoin    {% id %}
                | ROJoin    {% id %}
                | FOJoin    {% id %}
                | LSJoin    {% id %}
                | RSJoin    {% id %}
                | And       {% id %}
                | Or        {% id %}

Expr -> Eq {% id %}
                | Neq {% id %}
                | GT  {% id %}
                | LT  {% id %}
                | GTE {% id %} 
                | LTE {% id %}
                
# Expressions
Eq  -> Expression _ ("="|"≡") _ Expression {% ([l,_1,_2,_3,r]) => new RA.EQ(l,r) %}
Neq -> Expression _ "≠" _ Expression {% ([l,_1,_2,_3,r]) => new RA.NEQ(l,r) %}
GT  -> Expression _ ">" _ Expression {% ([l,_1,_2,_3,r]) => new RA.GT(l,r) %}
LT  -> Expression _ "<" _ Expression {% ([l,_1,_2,_3,r]) => new RA.LT(l,r) %}
GTE -> Expression _ "≥" _ Expression {% ([l,_1,_2,_3,r]) => new RA.GTE(l,r) %}
LTE -> Expression _ "≤" _ Expression {% ([l,_1,_2,_3,r]) => new RA.LTE(l,r) %}

# Calc
Plus  -> Expression _ "+" _ Expression {% ([l,_1,_2,_3,r]) => new RA.Plus(l,r) %}
Minus -> Expression _ "-" _ Expression {% ([l,_1,_2,_3,r]) => new RA.Minus(l,r) %}
Mult  -> Expression _ "*" _ Expression {% ([l,_1,_2,_3,r]) => new RA.Times(l,r) %}
Div   -> Expression _ "/" _ Expression {% ([l,_1,_2,_3,r]) => new RA.DividedBy(l,r) %}

# Relational Operators
# Unary
Selection  -> "σ" Cond _ Target {% ([o,c,_,t]) => new RA.Selection(c,t) %}
Projection -> "π" Cond _ Target {% ([o,c,_,t]) => new RA.Projection(c,t) %}
Rename     -> "ρ" Cond _ Target {% ([o,c,_,t]) => new RA.Rename(c,t) %}

# Binary
Union     -> Expression _ "∪" _ Expression      {% ([l,_1,_2,_3,r]) => new RA.Union(l,r) %}
Intersect -> Expression _ "∩" _ Expression      {% ([l,_1,_2,_3,r]) => new RA.Intersection(l,r) %}
Without   -> Expression _ "\\" _ Expression     {% ([l,_1,_2,_3,r]) => new RA.Without(l,r) %}
Join      -> Expression _ "⋈" Cond _ Expression {% ([l,_1,_2,cond,_3,r]) => new RA.Join(l,r,cond) %}
LOJoin    -> Expression _ "⟕" Cond _ Expression {% ([l,_1,_2,cond,_3,r]) => new RA.LOJoin(l,r,cond) %}
ROJoin    -> Expression _ "⟖" Cond _ Expression {% ([l,_1,_2,cond,_3,r]) => new RA.ROJoin(l,r,cond) %}
FOJoin    -> Expression _ "⟗" Cond _ Expression {% ([l,_1,_2,cond,_3,r]) => new RA.FOJoin(l,r,cond) %}
LSJoin    -> Expression _ "⋉" Cond _ Expression {% ([l,_1,_2,cond,_3,r]) => new RA.LSJoin(l,r,cond) %}
RSJoin    -> Expression _ "⋊" Cond _ Expression {% ([l,_1,_2,cond,_3,r]) => new RA.RSJoin(l,r,cond) %}

# Logic
Or  -> Expression _ "∨" _ Expression
And -> Expression _ "∧" _ Expression
Not -> "¬" Expression

Cond   -> "{" Expression "}" {% ([_1,ex,_2]) => ex %}
Target -> "(" Expression ")" {% ([_1,ex,_2]) => ex %}
Attr   -> Ident "." Ident    {% ([rel, _, attr]) => new RA.Attribute(rel, attr) %}
Alias  -> Ident "→" Ident    {% ([oname, _, nname]) => { return {oname: oname, nname: nname} }%} 
List   -> ("[" _ "]")        {% (_) => [] %}
        | ("[" Expression ("," Expression):* "]") {% ([toks]) => {
                // remove brackets  
                [hd, ...tl] = toks.slice(1,-1);
                // tl is nested one level too deep -> [0]
                return tl[0].reduce((lst,[comma,val]) => lst.concat(val), [hd]);
            }
         %}

Terminal -> decimal {% id %}
                        | int   {% id %}
                        | Attr  {% id %}
                        | Alias {% id %}
                        | List  {% id %}
                        | Ident {% id %}

Ident -> [\w]:* {% ([s]) => new RA.Ident(s.join("")) %}