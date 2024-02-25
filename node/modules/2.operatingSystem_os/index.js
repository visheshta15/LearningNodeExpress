//The os module provides operating system-related utility methods and properties. It can be accessed using:
const os = require('os')

console.log(os.arch())

// desktop details 
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type())

const freememory  = os.freemem()
//memory in bytes
console.log(freememory)
//memory in giga bytes
console.log(`${freememory /1024 /1024 /1024}`)

// total memory 
const totalmemory = os.totalmem()
console.log(`${totalmemory /1024 /1024 /1024}`)
