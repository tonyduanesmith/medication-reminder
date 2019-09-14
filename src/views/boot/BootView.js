import React, { useEffect } from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'
import { SplashScreen } from 'expo'

const StyledView = styled.View`
	flex: 1;
	background-color: #029cf5;
	justify-content: center;
	align-items: center;
`

const BootView = () => {
	useEffect(() => {
		SplashScreen.preventAutoHide()
	}, [])
	return (
		<StyledView>
			<Text>test</Text>
		</StyledView>
	)
}

export default BootView
