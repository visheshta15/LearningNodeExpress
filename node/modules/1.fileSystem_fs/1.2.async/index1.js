const fs = require('fs')

// write in file
// passing a function as an argument - a callback - that gets called when that task completes. The callback has an argument that tells you whether the operation completed successfully. 
// now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking for errors.
fs.writeFile('File1.txt', 'creating a file asynchronously and writing inside it\n', (err)=>{
    console.log('file created')
    console.log(err)
})

// append 
fs.appendFile('File1.txt', 'this is the new data that is appending in the old file', (err)=>{
    console.log('appended in the file')
    console.log(err)
})

// read 
fs.readFile('File1.txt', 'utf-8', (err, data)=>{
    console.log(data)
    console.log(err)
})