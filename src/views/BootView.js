import React, { useEffect, useContext } from 'react'
import { SplashScreen } from 'expo'
import { Context as AppContext } from '../context/AppContext'

const BootView = () => {
	const {
		state: { showSplash },
		checkHasOnboarded
	} = useContext(AppContext)

	useEffect(() => {
		if (showSplash) {
			SplashScreen.preventAutoHide()
		} else {
			SplashScreen.hide()
		}
		checkHasOnboarded()
	}, [])
	return null
}

export default BootView
