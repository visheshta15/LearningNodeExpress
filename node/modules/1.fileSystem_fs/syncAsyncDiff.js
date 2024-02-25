const fs = require('fs')

// read data 
fs.readFile('./1.2.async/File1.txt', 'utf-8', (err, data)=> console.log(':data read in aasync way : ',data, err))  

const data = fs.readFileSync('./1.2.async/File1.txt', 'utf-8')
console.log(':data read in sync way :', data)


// sync 
fs.writeFileSync
fs.appendFileSync
fs.readFileSync
fs.renameSync
fs.mkdirSync
fs.unlinkSync
fs.rmdirSync

// async 
fs.writeFile
fs.appendFile
fs.readFile
fs.rename 
fs.mkdir
fs.unlink
fs.rmdir
// always need a callback function
