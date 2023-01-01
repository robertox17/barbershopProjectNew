const { gql } = require('apollo-server-express');

const typeDefs = gql`
	
	type User {
		_id: ID
		username: String
		appointments: [Appointment]
	}

	type Auth {
		token: ID!
		user: User
	}

	type Appointment {
		_id: ID
		date: String!
		time: String!
		name: String!
		email: String
		phone: String!
	}

	type BookedAppointments {
		date: String!
		time: String!
	}

	type Query {
		users: [User]
		me: User
		appointments: [BookedAppointments]
	}

	type Mutation {
		addUser(username: String!, password: String!): Auth
		createAppointment(date: String!, time: String!, name: String!, email: String!, phone: String!): User
		login(username:String!,password:String!):Auth
	}
`;

module.exports = typeDefs;
