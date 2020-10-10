# Bit crusher
Javascript URL-friendly [dictionary encoder](https://en.wikipedia.org/wiki/Dictionary_coder) created to **code-golfing** competition

## Example crush

Before: **253** chars

```js
console.log(`99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.`)
```

After: **167** chars
```js
O=`console.log(\`99jv9m8j.
98jv8m7j.\`)jq on the wallmq.
Take one down and pass it aroundvq bottles of beerv, 9`;for(o of'vqmj')with(O.split(o))O=join(pop());eval(O)
```

## Why URL-friendly?
**Bit crusher** does not use special URL character, so with a little modification you can put your script to QR-code!

### Try it out!

![image](https://user-images.githubusercontent.com/13007891/92503018-f2769180-f200-11ea-9327-4342ea0afeee.png)
```
data:text/html,<script>O=`alert(\`99jv9m8j.%0A
98jv8m7j.\`)jq on the wallmq.%0A
Take one down and pass it aroundvq bottles of beerv, 9`;for(o of'vqmj')with(O.split(o))O=join(pop());eval(O)</script>
```

Copy scaned text to browser address bar and see the result!

## Instalation
```
npm i bit-crush
```

## Usage

Node:
```js
const bitCrush = require('bit-crush')

const code = `console.log(\`99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.\`)`

const crushed = bitCrush(code)

console.log(crushed)
```
