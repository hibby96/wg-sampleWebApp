const express = require('express');
const find = require('./API/MetroFinder/find');
const misc = require('./API/misc/index');

// const getId = require('docker-container-id');
const app = express()
const port = 3000


app.get('/', async (req, res) => {
    console.log(req.query);
    res.send(req.query)
})

app.get('/MetroFinder', async (req, res) => {

    query = JSON.stringify(req.query);

    console.log("Query: " + query);

    LatLng = req.query.LatLng
    console.log("LatLng: " + LatLng)
    res.send(find.nearest(LatLng))
    // res.send(req.query)
})

app.get('/misc/base64encode', async (req, res) => {
    something = Object.keys(req.query)[0]
    console.log(something);
    res.send(misc.base64encode(something))
})

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
})
