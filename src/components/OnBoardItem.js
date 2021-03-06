import React from 'react'
import { View, Image, Text } from 'react-native'
import styled from 'styled-components'
import H2 from './H2'
import Subtitle1 from './Subtitle1'
import PropTypes from 'prop-types'

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

const OnboardItem = ({ item }) => {
	return (
		<ViewContainer>
			<OnboardImage source={item.image} />
			<H2 style={{ marginTop: 40 }}>{item.title}</H2>
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

OnboardItem.propTypes = {
	item: PropTypes.object
}

export default OnboardItem
