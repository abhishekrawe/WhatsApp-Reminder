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
    Reminder.find({}, (err, reminderList) => {
        if(err) {
            console.log(err)
        }
        if (reminderList){
            res.send(reminderList)
        }
    })

})

app.post("/addReminder", (req, res) => {
    const { remindMsg , remindAt } = req.body
    const reminder = new Reminder({
        reminderMsg,
        remindAt,
        isReminded: false
    })
    reminder.save(err => {
        if (err) {
            console.Console.log(err)
        }
        Reminder.find({}, (err, reminderList) => {
            if(err) {
                console.log(err)
            }
            if (reminderList){
                res.send(reminderList)
            }
        })
    })

})

app.post("/deleteReminder", (req, res) => {
    reminder.deleteOne({_id: req.body.id}, () => {
        Reminder.find({}, (err, reminderList) => {
            if(err) {
                console.log(err)
            }
            if (reminderList){
                res.send(reminderList)
            }
        })
    })
})



app.listen(9000, () =>  console.log("Be started"))


