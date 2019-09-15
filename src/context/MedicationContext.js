import createDataContext from './createDataContext'

const initialState = {
	medications: [
		{
			_id: 938474655464,
			name: 'Azathioprine',
			doseSize: '50mg',
			colour: 'green',
			count: 100,
			used: 9
		},
		{
			_id: 44958576464,
			name: 'Paracetamol',
			doseSize: '150mg',
			colour: 'orange',
			count: 200,
			used: 87
		},
		{
			_id: 98487676525,
			name: 'Propanalol',
			doseSize: '150mg',
			colour: 'lightBlue',
			count: 150,
			used: 24
		}
	]
}

const reducer = (state, { type, payload }) => {
	switch (type) {
		default:
			return state
	}
}

const getMedications = dispatch => () => {}

export const { Context, Provider } = createDataContext(
	reducer,
	{ getMedications },
	initialState
)
