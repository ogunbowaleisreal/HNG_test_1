const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const response = require('./json_data/response')
const cors = require('cors');

app.use(cors())

app.get('/base', (req,res)=>{
    res.status(200).send(response)
})



app.listen(PORT, ()=>{ console.log(`server running on port ${PORT}`)})