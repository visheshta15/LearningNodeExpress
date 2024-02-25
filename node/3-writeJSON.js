const fs = require('fs')

const bioData = {
    name: 'visheshta',
    profession: 'software developer',
    age: 30,
    channel: 'yet to channel'
}

const jsonDataForFile = JSON.stringify(bioData)

fs.writeFile(
    "bio.json",
    jsonDataForFile,
    (err) => console.log(err)
)
