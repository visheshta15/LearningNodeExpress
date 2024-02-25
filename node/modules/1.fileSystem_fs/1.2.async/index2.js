const fs = require('fs')

// creating folder 
const dir = './newAsyncFolder'
try {
    if(fs.existsSync(dir)){
        console.log("Directory already exists.");
    }else{
        fs.mkdir(dir, (err) => console.log('error while creating directory: ', err))
        console.log("Directory is created.");
    }
} catch (err) {
    console.log('error : ', err)
}

// writing in file 
fs.writeFile(`${dir}/file2.txt`, 'created new file inside recently created folder and writing inside it\n', (err)=> {console.log('writing data in file error :', err)})

// append 
fs.appendFile(`${dir}/file2.txt`, 'my name is visheshta, appending data in file', (err)=> console.log('appending data in file error :', err))

// read 
fs.readFile(`${dir}/file2.txt`, 'utf-8', (err, data)=>console.log(err, data))

// rename
fs.rename(`${dir}/file2.txt`, `${dir}/renamefile2.txt`, (err)=> console.log('rename done---'))

// delete file 
fs.unlink(`${dir}/renamefile2.txt`, (err)=> console.log('file deleted---'))

// delete folder 
fs.rmdir(dir, (err)=> console.log('folder deleted---'))