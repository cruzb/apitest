const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');


const app = express();
const PORT = 3000;


const pathname = path.join(__dirname, 'routes');
fs.readdirSync(pathname).forEach(file => {
    file = path.resolve(pathname, file);
    if(fs.statSync(file).isFile()) {
        console.log(pathname + file);
        app.use('/', require(`${pathname}/${file}`));
    }
})

app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
