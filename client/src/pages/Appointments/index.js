import '../../styles/appointments/styles.css'
import { React, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { CREATE_APPOINTMENT } from "../../utils/mutations";
import { DATE_TIME } from "../../utils/queries";


function Appointments() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time , setTime] = useState("");

  const [createAppointment, { error }] = useMutation(CREATE_APPOINTMENT);

  const { data, loading } = useQuery(DATE_TIME);
  const appointments = data?.appointments || [];
  console.log(appointments);

  const appStrings = appointments.map(app => {
    return app.date + ' ' + app.time; 
  });

  console.log(appStrings);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'phone') {
      setPhone(inputValue);
    } else if (inputType === 'date') {
      setDate(inputValue);
    } else if (inputType === 'time') {
      setTime(inputValue);
    }

    // if (date && time) {
    //   console.log(date + ' ' + time);
    //   console.log('About to check availability...');
      
    //   if (appStrings.includes(date + ' ' + time)) {
    //     console.log('Appointment taken...');
    //     setMessage('Appointment taken...');
    //   } else {
    //     setMessage('');
    //   }

    // }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    try{
      const {data} = createAppointment({
        variables:{name,phone,email,date,time}
      });
      setName("");
      setPhone("");
      setEmail("");
      setDate("");
      setTime("");
    } catch(error){
      console.log(error)
    }
  }; 
  
  return (
    <div className='block4'>
        <form className='form'>
        <h1 className='big'>Book Appointment</h1>
          <input
           className='input'
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
           <input
            placeholder="phone"
            value={phone}
            className='input'
            onChange={(event) => setPhone(event.target.value)}
          />
          <input
          className='input'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
          className='input'
            value={date}
            name="date"
            onChange={handleInputChange}
            type="date"
            placeholder="date"
          />
           <input
           className='input'
            value={time}
            name="time"
            onChange={handleInputChange}
            type="time"
            step="360"
            placeholder="time"
          />

            

             {appStrings.includes(date + ' ' + time) ? (
              <>
               <button type="submit" disabled onClick={handleFormSubmit}>
                submit!
              </button>

              <div>
                Please try a different time/date.
              </div>
              </>
              
            ) : (
              <button type="submit" onClick={handleFormSubmit}>
              Book Now
            </button>
            )}
          
          
        </form>
    </div>
  );
}

export default Appointments;
