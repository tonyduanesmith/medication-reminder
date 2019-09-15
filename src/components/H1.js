import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const StyledH1 = styled.Text`
	font-size: 22px;
	font-weight: bold;
	font-family: 'sf-pro-rounded-semibold';
	color: #000000;
`

const H1 = ({ children, style }) => {
	return <StyledH1 style={{ ...style }}>{children}</StyledH1>
}

H1.propTypes = {
	children: PropTypes.string,
	style: PropTypes.object
}

H1.defaultProps = {
	children: null,
	style: {}
}

export default H1
