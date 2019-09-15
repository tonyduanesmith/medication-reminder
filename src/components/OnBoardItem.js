import React from 'react'
import { View, Image, Text } from 'react-native'
import styled from 'styled-components'
import H1 from './H1'
import Subtitle1 from './Subtitle1'

const ViewContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-around;
	justify-content: center;
`

const OnboardImage = styled.Image`
	width: 220px;
	height: 220px;
	resize-mode: contain;
`

const OnBoardItem = ({ item }) => {
	return (
		<ViewContainer>
			<OnboardImage source={item.image} />
			<H1 style={{ marginTop: 40 }}>{item.title}</H1>
			<Subtitle1
				style={{
					paddingHorizontal: 30,
					textAlign: 'center',
					marginTop: 10
				}}
			>
				{item.text}
			</Subtitle1>
		</ViewContainer>
	)
}

export default OnBoardItem
