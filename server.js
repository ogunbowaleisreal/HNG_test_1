const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const response = require('./json_data/response')
const cors = require('cors');
const new_date = new Date().toISOString()

app.use(cors())

app.get('/', (req,res)=>{
    response.current_datetime =  new Date().toISOString()
    res.status(200).json(response)
})



app.listen(PORT, ()=>{ console.log(`server running on port ${PORT}`)})