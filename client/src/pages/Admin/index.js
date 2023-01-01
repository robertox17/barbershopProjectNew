import React from 'react';
// import '../../../styles/appointments/styles.css'
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from '@apollo/client';

import AppointmentsList from './AppointmentsList';

// Import the query we are going to execute from its file
import { GET_APPOINTMENTS } from '../../utils/queries';

function Admin() {
  const { loading, data } = useQuery(GET_APPOINTMENTS);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  
  const Appointments  = data?.me.appointments || [];

  console.log(Appointments);

  return (
    <main>
      <div >
        <div >
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AppointmentsList
            appointments={Appointments}
            title='Appointments for the day'
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default Admin