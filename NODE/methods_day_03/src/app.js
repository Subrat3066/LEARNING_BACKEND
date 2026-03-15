const express = require("express")

const app = express()
app.use(express.json())

let notes = []


app.post("/notes" ,(req,res)=>{
    notes.push(req.body)
    console.log("Data received")

    res.status(201).json({
        message:"Data received"
    })
})
app.get("/notes" , (req ,res)=>{
    console.log("Data provided")
    res.status(200).json({
        message:"data fetched",
        notes:notes
    })
})

module.exports = app
