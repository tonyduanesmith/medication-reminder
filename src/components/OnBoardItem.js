import React from 'react'
import { View, Image, Text } from 'react-native'
import styled from 'styled-components'

const ViewContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-around;
	border: 1px solid red;
	justify-content: center;
`

const OnboardImage = styled.Image`
	width: 220px;
	height: 220px;
	resize-mode: contain;
`

const HeaderText = styled.Text`
	font-size: 22px;
	font-weight: bold;
	font-family: 'sf-pro-rounded-semibold';
`

const OnBoardItem = ({ item }) => {
	console.log(item.title)
	return (
		<ViewContainer>
			<OnboardImage source={item.image} />
			<HeaderText>{item.title}</HeaderText>
			<Text>{item.text}</Text>
		</ViewContainer>
	)
}

export default OnBoardItem
