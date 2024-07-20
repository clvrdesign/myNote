const express = require('express')
require('dotenv').config()
const app = express()

// middleware
app.use('/', (req, res)=>{
    res.send('Hello World')
})

// routes
app.use('/api/users', require('./routes/api/users'))

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on ${process.env.PORT}`)
})