ejs.ts
======

template system based on node version of ejs

```js
var ejs = new Ejs();
ejs.register("apple","<a href='apple'>Apple</a><br/>");
ejs.register("grape","<a href='grape'>Grape</a><br/>");
ejs.register("fruit","<a href='fruit'>Fruit</a><br/><%- ejs.grape() %><%- ejs.apple() %>");
ejs.fruit({
    somevar:"for all withing this instince"
});

```