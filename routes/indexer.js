const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
  return res.send("index");
});


router.get('/:test', (req, res, next) => {
  return res.send(req.params.test);
})


module.exports = router;
