const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const getOlder = async (req, res, next) => {
    const data = fs.readFileSync(path.join(__dirname, '../../data.json'));
    const dataJson = JSON.parse(data);
    const person = dataJson.filter(person => person.age > Number(req.query.age));

    if(!person) {
        const err = new Error('Person not found.');
        err.status = 404;
        throw err;
    }

    res.send(person);
};
router
  .route('/api/v1/people/older')
  .get(getOlder);
module.exports = router;
