//The path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require('path')

const filePath = 'D:\Data Structure\node\modules\3.path_path\index.js'

console.log('dirname :', path.dirname(filePath))
console.log('extname :', path.extname(filePath))
console.log('basename :', path.basename(filePath)) 
console.log('parse : ', path.parse(filePath)) 
console.log('root : ', path.parse(filePath).root) 
console.log('root : ', path.parse(filePath).base) 

// var assets = path.join(__dirname,'style.css');