const path = require('path');
const fs = require('fs');

exports.run = (app) => {
    let files = [];
    const pathname = path.join(__dirname, 'routes');
    files = getAllFiles('./routes', files);

    files.forEach((file) => {
        app.use('/', require(path.join(__dirname, '../', file)));
    });
}

function getAllFiles(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach((file) => {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
        arrayOfFiles.push(path.join(dirPath, "/", file))
        }
    })

    return arrayOfFiles
}
