import createDataContext from './createDataContext'
import { AsyncStorage } from 'react-native'
import { navigate } from '../utils/navigationRef'
import * as Font from 'expo-font'

const initialState = {
	showSplash: true,
	fontsLoaded: false
}

const appReducer = (state, { type, payload }) => {
	switch (type) {
		case 'SET_SHOW_SPLASH':
			return {
				...state,
				showSplash: payload
			}
		case 'LOAD_FONTS':
			return {
				...state,
				fontsLoaded: payload
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

const loadFonts = dispatch => async () => {
	await Font.loadAsync({
		'sf-pro-rounded-semibold': require('../assets/fonts/SF-Pro-Rounded-Semibold.otf')
	})

	dispatch({
		type: 'LOAD_FONTS',
		payload: true
	})

	// await Font.loadAsync({
	// 	'sf-pro-rounded-semibold': require('../assets/fonts/SF-Pro-Rounded-Semibold.otf')
	// })
}

export const { Provider, Context } = createDataContext(
	appReducer,
	{ checkHasOnboarded, loadFonts },
	initialState
)
