ejs.ts
======

template system based on ejs

```js
var ejs = new EjsTs("ejs");

ejs.register("apple","<a href='apple'>Apple</a><br/>");
ejs.register("grape","<a href='grape'>Grape</a><br/>");
ejs.register("fruit","<a href='fruit'>Fruit</a><br/><%= ejs.grape() %>2<%= ejs.apple() %>");
console.log(ejs.fruit({
    somevar:"for all with in this instince"
}));

//<a href='fruit'>Fruit</a><br/><a href='grape'>Grape</a><br/>2<a href='apple'>Apple</a><br/>
```