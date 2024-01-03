# JDOM.js [![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fhigginsrob%2Fjdom%2Fbadge&style=flat)](https://actions-badge.atrox.dev/higginsrob/jdom/goto)

### Installation

```
npm install --save jdom

```

### Import

```
import {
   domFactory, svgFactory,
   on, once, off, dispatch,
   style
} from 'jdom';
```

---

### Compose DOM Example

##### example:

```
const {DIV, SCRIPT, SPAN} = domFactory;
const myDiv = DIV({
     parent: document.body
     id: 'myDiv',
     style: {
         color: 'red'
     },
     dataset: {
         foo: 'bar'
     },
     children: [
         'injecting script',
         SCRIPT({src: 'http://some.url'}),
         'done'
     ],
     click: () => {
         alert('now');
     }
 });
 SPAN({parent: myDiv, children: ['SomeText!!!!']);
```

---

### Compose SVG Example

##### example:

```
 import {SVG, RECT, CIRCLE} from 'jdom';

 SVG({
     id: 'mySVG',
     width: 200,
     height: 200,
     viewBox: '0 0 200 200',
     children: [
         RECT({
             fill : 'red',
             x:5,
             y:5,
             width: 190,
             height: 190
         }),
         CIRCLE({
             fill: 'yellow',
             cx: 100,
             cy:100,
             r:80
         })
     ],
     parent: document.body
 });
```

---

### style (_HTMLElement_ **elem**, _object_ **props**)

_update element style_

##### example:

```
 const a = document.getElementById('aDiv');
 style(a, {
     color: 'green',
     backgroundColor: 'red'
 })
```

---

### QueryList(\$) (_string_/_element_/_nodelist_/_array_/_function_ **selector**)

##### example:

```
 const $a = $('#aDiv');
 $a.on('click', () => {
     if ($a.hasClass('foo')) {
         $a.removeClass('foo').addClass('bar');
     } else {
         $a.removeClass('bar').addClass('foo');
     }
 });
 $a.dispatch('click');
```

#### Querylist Event Methods

-   on
-   once
-   off
-   dispatch

#### Querylist Style Methods

-   style
-   hasClass
-   addClass
-   removeClass

#### Querylist Array Prototype Methods

-   filter
-   forEach
-   map
-   pop
-   push
-   shift
-   slice
-   some
-   splice
-   unshift
