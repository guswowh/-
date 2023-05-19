const express = require('express')
const router = express.Router()

router.get('/get', function (req, res) {
  console.log('front call test')
  console.log(req.body)

  return res.status(200).json({
    myMessage: 'you get data',
  })
})

router.post('/post', function (req, res) {
  console.log('front call test')
  console.log(req.headers)
  console.log(req.body)

  return res.status(200).json({
    myMessage: 'you get data',
  })
})

module.exports = router
