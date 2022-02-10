import React, { useState, useEffect } from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";

import "./App.css";

function App() {
  const [reminderMsg, setReminderMsg] = useState("");
  const [remindAt, setRemindAt] = useState();

  const addReminder = () => {};

  return (
    <div className="App">
      <div className="homepage">
        <div className="homepage_header">
          <h1> Remind Me </h1>
          <input
            type="text"
            placeholder="Reminder notes here...."
            value={reminderMsg}
            onChange={(e) => setReminderMsg}
          />
          {/* e => setNotificationMsg(e.target.value) */}
          <DateTimePicker
            value={remindAt}
            onChange={setRemindAt}
            minDate={new Date()}
            minutePlaceholder="mm"
            hourPlaceholder="hh"
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearAriaLabel="YYYY"
          />
          <div className="button" onClick={addReminder}>
            Add Reminder
          </div>
        </div>

        <div className="homepage_body">
          <div className="reminder_card">
            <h2> Reminder Note</h2>
            <h3> Remind Me at :</h3>
            <p> 26/05 / 2021 @2AM</p>
            <div className="button"> Delete </div>
          </div>
          <div className="reminder_card">
            <h2> Reminder Note</h2>
            <h3> Remind Me at :</h3>
            <p> 26/05 / 2021 @2AM</p>
            <div className="button"> Delete </div>
          </div>
          <div className="reminder_card">
            <h2> Reminder Note</h2>
            <h3> Remind Me at :</h3>
            <p> 26/05 / 2021 @2AM</p>
            <div className="button"> Delete </div>
          </div>
          <div className="reminder_card">
            <h2> Reminder Note</h2>
            <h3> Remind Me at :</h3>
            <p> 26/05 / 2021 @2AM</p>
            <div className="button"> Delete </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
