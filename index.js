const express = require('express');
const port = 8080;
const app = express();


app.get('/', (req, res)=> {
    res.status(200).send({
        name:'Server is Running',
        port:'8080'
    })
})

app.get('/tshirt', (req, res)=> {
    res.status(200).send({
        name:'sanjay',
        phone:'9444766048'
    })
})

app.listen(port, () => console.log(`Server is running: ${port}`));