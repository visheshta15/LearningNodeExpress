const fs = require('fs')


fs.readFile(
    "bio.json",
    "utf-8",
    (err, data) => {
        console.log(data)
        console.log(JSON.parse(data))
    }
)