const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const getStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, './data.json'));
    const stats = JSON.parse(data);
    const personInfo = stats.find(person => person.id === Number(req.params.id));
    if (!personInfo) {
      const err = new Error('Person not found');
      err.status = 404;
      throw err;
    }
    res.json(personInfo);
  } catch (e) {
    next(e);
  }
};
router
  .route('/api/v1/get/:id')
  .get(getStats);
module.exports = router;
