import createDataContext from './createDataContext'
import { AsyncStorage } from 'react-native'
import { navigate } from '../utils/navigationRef'

const initialState = {
	showSplash: true
}

const appReducer = (state, { type, payload }) => {
	switch (type) {
		case 'SET_SHOW_SPLASH':
			return {
				...state,
				showSplash: payload
			}
		default:
			return state
	}
}

const checkHasOnboarded = dispatch => async () => {
	const hasOnboarded = await AsyncStorage.getItem('hasOnboarded')
	if (hasOnboarded) {
		navigate('mainFlow')
	} else {
		navigate('Onboarding')
	}
	dispatch({
		type: 'SET_SHOW_SPLASH',
		action: false
	})
}

export const { Provider, Context } = createDataContext(
	appReducer,
	{ checkHasOnboarded },
	initialState
)
