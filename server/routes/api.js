const express = require('express')
const router = require.Router()

router.get('/', function (req, res){
    res.send("API Routes")
})

module.exports = router