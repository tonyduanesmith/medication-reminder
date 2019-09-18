import React from 'react'
import styled from 'styled-components'
import { View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const Container = styled.View`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	padding-right: 40px;
`

const SwipeButton = ({
	iconName,
	iconColor,
	iconBackgroundColor,
	onDelete
}) => {
	return (
		<TouchableOpacity style={{ marginBottom: 10 }}>
			<Container>
				<AntDesign.Button
					name={iconName}
					size={30}
					color={iconColor}
					backgroundColor={iconBackgroundColor}
					borderRadius={30}
					style={{
						paddingRight: 4,
						paddingLeft: 14,
						paddingTop: 12,
						paddingBottom: 12
					}}
					onPress={onDelete}
				/>
			</Container>
		</TouchableOpacity>
	)
}

SwipeButton.propsTypes = {
	iconName: PropTypes.string,
	iconColor: PropTypes.string,
	iconBackgroundColor: PropTypes.string,
	onDelete: PropTypes.func
}

export default SwipeButton
