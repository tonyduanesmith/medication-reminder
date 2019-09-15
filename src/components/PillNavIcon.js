import React from 'react'
import { Svg, Path } from 'react-native-svg'
import PropTypes from 'prop-types'

const PillNavIcon = ({ color }) => {
	return (
		<Svg height='70%' width='70%' fill={color} viewBox='0 0 24 24'>
			<Path
				class='st0'
				d='M22.165,1.835c-0.153-0.153-0.312-0.296-0.476-0.43c-2.297-1.873-5.611-1.873-7.908,0
	c-0.164,0.134-0.323,0.277-0.476,0.43L1.835,13.306c-2.446,2.446-2.446,6.413,0,8.86h0C3.058,23.388,4.661,24,6.265,24
	c1.603,0,3.206-0.612,4.43-1.835l11.471-11.471C24.612,8.248,24.612,4.281,22.165,1.835z M15.492,15.489l-5.737,5.737
	c-0.932,0.933-2.172,1.446-3.491,1.446c-1.319,0-2.559-0.514-3.491-1.446c-0.932-0.932-1.446-2.171-1.446-3.49
	c0-1.318,0.514-2.558,1.446-3.491l5.737-5.737L15.492,15.489z'
			/>
		</Svg>
	)
}

PillNavIcon.propTypes = {
	color: PropTypes.string
}

PillNavIcon.defaultProps = {
	color: '#ffffff'
}

export default PillNavIcon
