import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import H1 from '../../components/H1'

const StyledView = styled.View`
	flex: 1;
	padding-left: 16px;
	padding-right: 16px;
`

const TodayView = () => {
	return (
		<StyledView>
			<H1>Today</H1>
		</StyledView>
	)
}

TodayView.navigationOptions = {
	headerStyle: {
		borderBottomWidth: 0
	}
}

export default TodayView
