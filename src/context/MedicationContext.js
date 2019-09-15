import createDataContext from './createDataContext'

const initialState = {
	medications: [
		{
			name: 'Azathioprine',
			doseSize: '50mg',
			colour: 'green',
			count: 100,
			used: 9
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
