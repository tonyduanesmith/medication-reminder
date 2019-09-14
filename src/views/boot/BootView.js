import React from 'react'
import styled from 'styled-components'
import { View, Image } from 'react-native'
import AppIcon from '../../assets/icons/AppIcon'

const StyledView = styled.View`
	flex: 1;
	background-color: #029cf5;
	justify-content: center;
	align-items: center;
`

const BootView = () => {
	return (
		<StyledView>
			<AppIcon />
		</StyledView>
	)
}

export default BootView
