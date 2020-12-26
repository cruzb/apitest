const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const getTest = async (req, res, next) => {
    var data = {
        "fruit": {
            "apple": req.query.f,
            "color": req.query.g
        }
    };

    res.send(data);
};
router
  .route('/api/v1/test')
  .get(getTest);
module.exports = router;
