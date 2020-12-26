const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const getId = async (req, res, next) => {
    const data = fs.readFileSync(path.join(__dirname, '../../data.json'));
    const dataJson = JSON.parse(data);
    const person = dataJson.find(person => person.id === Number(req.query.id));

    if(!person) {
        const err = new Error('Person not found.');
        err.status = 404;
        throw err;
    }

    res.send(person);
};
router
  .route('/api/v1/people/id')
  .get(getId);
module.exports = router;
