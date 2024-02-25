//master nodejs module 
// node.js file system module allows you to work with the file system on your computer. to incluse file system module, use require() method

// # make a folder (in terminal)
// `mkdir folder_name`

// # make a file inside folder (go inside the folder)
// `type nul > file_name`

const fs = require('fs')

// write in file
fs.writeFileSync('file1.txt', 'creating a file synchronously and write in it. ')
fs.writeFileSync('file1.txt', 'writing again in the same file.\n')

//apend data in file
fs.appendFileSync('file1.txt', 'appending in the same file, the file which is created previously')

// nodejs includes an additional data type called Buffer (not available in browser's Javascript)
// Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network.
const buff_data = fs.readFileSync('file1.txt')
console.log(buff_data)
const org_data = buff_data.toString()
console.log(org_data)

fs.renameSync('file1.txt', 'file.txt')