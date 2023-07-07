const express = require('express')
const path = require('path')

const api = require('./server/routes/api')

const PORT = 3000

//express app
const app = express()
app.use(express.static(path.join(__dirname, 'dist')));
//json parser
app.use(express.json())
app.use(api)

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

//start the server
app.listen(PORT, function(){
    console.log("SERVER RUNNING ON LOCALHOST:",PORT)
})
