const fs = require('fs')

// create a folder
// fs.mkdirSync('newSyncFolder')

// create file inside new folder
fs.writeFileSync('newSyncFolder/newFile.txt', 'created this file inside the new folder\n')

// append data in file
fs.appendFileSync('newSyncFolder/newFile.txt','this is appended data in new file')

// read the data of file
// if no encoding is specified, then the raw buffer is returned
//utf-8 a character encoding capable of encoding all possible characters(called code points) in unicode.
const data = fs.readFileSync('newSyncFolder/newFile.txt', 'utf8')
console.log(data) 

// rename the file
fs.renameSync('newSyncFolder/newFile.txt', 'newSyncFolder/UpdateFile.txt')

// delete file 
fs.unlinkSync('newSyncFolder/UpdateFile.txt')

// delete folder 
fs.rmdirSync('newSyncFolder')