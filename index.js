const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');


const app = express();
const PORT = 3000;


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

require('./utils/init.js').run(app);
