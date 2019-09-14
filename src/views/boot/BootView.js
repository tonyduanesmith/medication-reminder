import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'
import { SplashScreen } from 'expo'
import { Context as AppContext } from '../../context/AppContext'

const StyledView = styled.View`
	flex: 1;
	background-color: #029cf5;
	justify-content: center;
	align-items: center;
`

const BootView = () => {
	const { state: showSplash, checkHasOnboarded } = useContext(AppContext)

	useEffect(() => {
		if (showSplash) {
			SplashScreen.preventAutoHide()
		} else {
			SplashScreen.hide()
		}
		console.log('run')
		checkHasOnboarded()
	}, [])
	return null
}

export default BootView
