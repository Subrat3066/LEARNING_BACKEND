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
app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index
    
    delete notes[index]

    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:index" , (req,res)=>{
    const index = req.params.index

    const time = req.body.time
    notes[index].time = time

    res.status(200).json({
        messgae:"Upadeted successfully"
    })

})

module.exports = app
