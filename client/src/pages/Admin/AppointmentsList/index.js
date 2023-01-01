import React from 'react';
import '../../../styles/appointments/styles.css'
import back from '../../../public/artApp.jpeg'
const AppointmentsList = ({ appointments, title }) => {
  if (!appointments.length) {
    return <h3>No Appointments Yet</h3>;
  }

  return (
    <div className='backpage'>
    <div className='appointment-card' >
      <h3 className='bigtitle'>{title}</h3>
      {appointments &&
        appointments.map((appointment) => (
          <div key={appointment._id} className="cardap">
            <h4>
              {appointment.name} <br />
              <span>
                has this appointment on {appointment.date}
              </span>
            </h4>
            <div>
              <p>at this time{appointment.time}</p>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default AppointmentsList;
