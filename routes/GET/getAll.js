const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const getAll = async (req, res, next) => {
    const data = fs.readFileSync(path.join(__dirname, '../../data.json'));
    const dataJson = JSON.parse(data);

    res.send(data);
};
router
  .route('/api/v1/people/all')
  .get(getAll);
module.exports = router;
