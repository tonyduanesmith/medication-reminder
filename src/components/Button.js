import React from 'react'
import { Button as BaseButton } from 'react-native-elements'

const Button = ({ title, onPress }) => {
	return (
		<BaseButton
			title={title}
			buttonStyle={{
				borderRadius: 13,
				height: 44,
				backgroundColor: '#029cf5'
			}}
			onPress={onPress}
		/>
	)
}

export default Button
