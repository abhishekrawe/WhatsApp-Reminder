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

const Reminder = new mongoose.model("reminder", reminderSchema)



//Whatsapp reminding functionality by Twilio
const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hi Demo Message From Abhishek Rawe', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+919931500039' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();




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
    const { reminderMsg , remindAt } = req.body
    const reminder = new Reminder({
        reminderMsg,
        remindAt,
        isReminded: false
    })
    reminder.save(err => {
        if(err) {
            console.log(err)
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
    Reminder.deleteOne({_id: req.body.id}, () => {
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


