require('dotenv').config()
const express = require("express")
const mongoose = require ('mongoose')
const cors = require("cors")

//App config 
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//DB config
mongoose.connect('mongodb://localhost:27017/reminderAppDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("DB connected") );

const reminderSchema = new mongoose.Schema({
    reminderMsg: String,
    remindAt: String,
    isReminded: Boolean
})

const Reminder = new mongoose.modelNames("reminder", reminderSchema)


//API routes
app.get("/getAllReminder", (req, res) => {

})

app.post("/addReminder", (req, res) => {

})

app.get("/deleteReminder", (req, res) => {

})

app.get("/", (req, res) => {
    res.send("A message from BE")
})

app.listen(9000, () =>  console.log("Be started"))


