const db = require('../config/connection');
const { User  } = require('../models');
const appointmentSeeds = require('./appointmentSeeds.json');

db.once('open', async () => {
//   await Appointment .deleteMany({});
  await Appointment.create(appointmentSeeds);

  console.log('all done!');
  process.exit(0);
});
