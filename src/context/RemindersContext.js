import createDataContext from './createDataContext'

const initialState = {
	reminders: [
		// {
		// 	_id: 938474655464,
		// 	medication_id: '7d898bb0-e3b6-11e9-b702-2df22878a127',
		// 	frequency: 'everyday',
		// 	time: '08:00',
		// 	dose: 3
		// },
		// {
		// 	_id: 938474655463,
		// 	medication_id: '7d898bb0-e3b6-11e9-b702-2df22878a127',
		// 	frequency: 'everyday',
		// 	time: '13:00',
		// 	dose: 3
		// },
		// {
		// 	_id: 938474655462,
		// 	medication_id: '7e77c970-d988-11e9-8cc7-df3b76e770e3',
		// 	frequency: 'everyday',
		// 	time: '21:00',
		// 	dose: 3
		// }
	]
}

const reducer = (state, { type, payload }) => {
	switch (type) {
		default:
			return state
	}
}

const fetchReminders = dispatch => async () => {}
const deleteReminder = dispatch => async () => {}

export const { Context, Provider } = createDataContext(
	reducer,
	{ fetchReminders, deleteReminder },
	initialState
)
