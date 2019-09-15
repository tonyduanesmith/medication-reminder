import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const StyledH2 = styled.Text`
	font-size: 22px;
	font-weight: bold;
	font-family: 'sf-pro-rounded-semibold';
	color: #000000;
`

const H2 = ({ children, style }) => {
	return <StyledH2 style={{ ...style }}>{children}</StyledH2>
}

H2.propTypes = {
	children: PropTypes.string,
	style: PropTypes.object
}

H2.defaultProps = {
	children: null,
	style: {}
}

export default H2
