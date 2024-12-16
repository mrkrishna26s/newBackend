require('dotenv').config()
const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('hello world')
})
app.get('/insta',(req, res)=>{
    res.send(`mekrishna26`)
})
app.listen(process.env.PORT, ()=>{
    console.log(`your app is listning on port ${process.env.PORT}`)
})