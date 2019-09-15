import React from 'react'
import styled from 'styled-components'
import { View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PropTypes from 'prop-types'
import H3 from './H3'

const Container = styled.View`
	width: 100%;
`
const ColoursContainer = styled.View`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin-top: 10px;
`

const SelectedDot = styled.View`
	width: 16px;
	height: 16px;
	background-color: #ffffff;
	border-radius: 8px;
`

const ColourPicker = ({ colours, selected, handleOnPress }) => {
	return (
		<Container>
			<H3>Colour</H3>
			<ColoursContainer>
				{Object.keys(colours).map(colour => {
					return (
						<TouchableOpacity
							key={colour}
							onPress={() => handleOnPress(colour)}
						>
							<LinearGradient
								colors={colours[colour]}
								style={{
									height: 30,
									width: 30,
									borderRadius: 15,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								{selected === colour ? <SelectedDot /> : null}
							</LinearGradient>
						</TouchableOpacity>
					)
				})}
			</ColoursContainer>
		</Container>
	)
}

ColourPicker.propTypes = {
	selected: PropTypes.string,
	colours: PropTypes.object
}

ColoursContainer.defaultProps = {
	selected: 'orange',
	colours: {}
}

export default ColourPicker
