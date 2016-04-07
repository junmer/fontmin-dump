fontmin-dump
===

> fontmin dump plugin


## Usage

```javascript
var Fontmin = require('fontmin');
var dump = require('fontmin-dump');

var fontmin = new Fontmin()
    .src('font.ttf')
    .use(dump())

// => font.json, font.html

```

## Preview

![preview](preview.png)

## Related

- [fontmin](https://github.com/ecomfe/fontmin)
- [SentyBrush](http://sentyfont.com)
