import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const StyledH3 = styled.Text`
	font-size: 17px;
	font-family: 'sf-pro-rounded-semibold';
	color: #000000;
`

const H3 = ({ children, style }) => {
	return <StyledH3 style={{ ...style }}>{children}</StyledH3>
}

H3.propTypes = {
	children: PropTypes.string,
	style: PropTypes.object
}

H3.defaultProps = {
	children: null,
	style: {}
}

export default H3
