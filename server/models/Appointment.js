const { Schema, model } = require('mongoose');


const appointmentSchema = new Schema(
	{
		date:String,
        time: String,
        name: String,
        email: String,
        phone:String
	},
	// set this to use virtual below
	{
		toJSON: {
			virtuals: true,
		},
	}
);

// const Appointment = model(' Appointment', appointmentSchema);


module.exports = appointmentSchema;
