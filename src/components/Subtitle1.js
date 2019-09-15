import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSubtitle1 = styled.Text`
	font-size: 17px;
	font-weight: bold;
	font-family: 'sf-pro-rounded-regular';
	color: #8c8c8c;
`

const Subtitle1 = ({ children, style }) => {
	return <Subtitle1 style={{ ...style }}>{children}</Subtitle1>
}

Subtitle1.propTypes = {
	children: PropTypes.string,
	style: PropTypes.object
}

Subtitle1.defaultProps = {
	children: '',
	style: {}
}

export default StyledSubtitle1
