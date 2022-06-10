const express = require('express')
// const getId = require('docker-container-id');
const app = express()
const port = 3000


app.get('/', async (req, res) => {
    console.log(req.query);
    res.send(req.query)
})


app.listen(port, async ()  => {
    console.log(`Example app listening on port ${port}`)
})
