const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		appointments: async () => {
			const user = await User.findOne({ username: 'Admin' }).select('appointments');
			// console.log(user.appointments);
			const appointments = user.appointments.map(appointment => {
				return {
					date: appointment.date,
					time: appointment.time
				};
			});
			// console.log(appointments);
			// console.log('test');
			return appointments;
		}
	},

	Mutation: {
		addUser: async (_, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			
			return { token, user };
		},
		createAppointment: async (_,args,context) => {
			console.log(args);
			const user = await User.findOneAndUpdate(
				{username:'Admin'},
				{$addToSet: {appointments: {...args}}},
				{ new: true }
			  );

			  console.log(user);
		
			  return user;
		},
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });
	  
			if (!user) {
			  throw new AuthenticationError('Incorrect credentials');
			}
	  
			const correctPw = await user.isCorrectPassword(password);
	  
			if (!correctPw) {
			  throw new AuthenticationError('Incorrect credentials');
			}
	  
			const token = signToken(user);
			return { token, user };
		  },

	},
};

module.exports = resolvers;


