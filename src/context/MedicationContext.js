import createDataContext from './createDataContext'
import { AsyncStorage } from 'react-native'
import { navigate } from '../utils/navigationRef'
import uuidv1 from 'uuid/v1'

const initialState = {
	medications: [
		// {
		// 	_id: 938474655464,
		// 	name: 'Azathioprine',
		// 	doseSize: '50mg',
		// 	colour: 'green',
		// 	count: 100,
		// 	used: 9
		// },
		// {
		// 	_id: 44958576464,
		// 	name: 'Paracetamol',
		// 	doseSize: '150mg',
		// 	colour: 'orange',
		// 	count: 200,
		// 	used: 87
		// },
		// {
		// 	_id: 98487676525,
		// 	name: 'Propanalol',
		// 	doseSize: '150mg',
		// 	colour: 'lightBlue',
		// 	count: 150,
		// 	used: 24
		// }
	]
}

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'FETCHED_MEDICATIONS':
			return {
				...state,
				medications: payload
			}
		default:
			return state
	}
}

const fetchMedications = dispatch => async () => {
	try {
		const medications = await AsyncStorage.getItem('medications')
		if (medications) {
			const data = JSON.parse(medications)
			dispatch({
				type: 'FETCHED_MEDICATIONS',
				payload: data
			})
			console.log(data)
		}
	} catch (err) {
		console.log('Something went wrong when fetching medications', err)
	}
}

const addMedication = dispatch => async (
	name,
	doseSize,
	colour,
	count,
	medications
) => {
	try {
		medications.push({
			name,
			doseSize,
			colour,
			count,
			used: 0,
			_id: uuidv1()
		})
		await AsyncStorage.setItem('medications', JSON.stringify(medications))
		navigate('Medications')
	} catch (err) {
		console.log('Something went wrong when adding medications', err)
	}
}

const updateMedication = dispatch => async (
	name,
	doseSize,
	colour,
	count,
	medications,
	_id
) => {
	const updated = medications.map(medication => {
		if (medication._id === _id) {
			return {
				name,
				doseSize,
				colour,
				count,
				used: 0,
				_id
			}
		} else {
			return medication
		}
	})
	try {
		await AsyncStorage.setItem('medications', JSON.stringify(updated))
		navigate('Medications')
	} catch (err) {
		console.log('Something went wrong when updating medications', err)
	}
}

const deleteMedication = dispatch => async (_id, medications) => {
	const updated = medications.filter(medication => medication._id !== _id)
	try {
		await AsyncStorage.setItem('medications', JSON.stringify(updated))
		dispatch({
			type: 'FETCHED_MEDICATIONS',
			payload: updated
		})
	} catch (err) {
		console.log('Something went wrong when deleting medication', err)
	}
}

export const { Context, Provider } = createDataContext(
	reducer,
	{ fetchMedications, addMedication, updateMedication, deleteMedication },
	initialState
)
