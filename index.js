const express = require('express');
const phone = require ('./phone.json');

const app = express()
const port = 3000

const data = 'my first data secnter here soon toon22'


app.get('/', (req, res) => {
    res.send(data);
})

app.get('/phone/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phones = phone.find(phone => phone.id === id) || {};
    res.send(phones);
})


app.get('/data', (req, res) => {
    res.send('hello new data server')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
