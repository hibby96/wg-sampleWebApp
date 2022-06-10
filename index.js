const express = require('express')
// const getId = require('docker-container-id');
const app = express()
const port = 3000


app.get('/', async (req, res) => {
    res.send('Hello there!')
})


app.listen(port, async ()  => {
    console.log(`Example app listening on port ${port}`)
})