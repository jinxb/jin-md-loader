# jin-md-loader v1.0.0

The jin-md-loader library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:

```js
$ npm i -g npm
$ npm i --save jin-md-loader
```

In Node.js:

```js
// Load
// const JinMdLoader = require('jin-md-loader');
```

### webpack.config.js

```js
 module.exports = {  
     module: {    
         rules: [      
             {
                test: /\.md$/i,
                use: [
                   "jin-md-loader"
                ]
              }   
         ],  
     }, 
 };
```



#### **I'm a rookie and gaining experience**......

