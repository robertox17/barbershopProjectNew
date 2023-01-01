import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
	query Query {
		users {
			username
			email
			_id
		}
	}
`;
export const GET_APPOINTMENTS = gql`
	query GetAppointments {
    me {
      appointments {
        _id
        date
        email
        name
        phone
        time
      }
    }
  }
`
export const DATE_TIME = gql`
	query appointments  {
  appointments {
    date
    time
  }
}
`
