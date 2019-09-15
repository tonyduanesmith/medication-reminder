import React from 'react'
import { Input as BaseInput } from 'react-native-elements'

const Input = ({ label, value, onChangeText, containerStyle }) => {
	return (
		<BaseInput
			label={label}
			value={value}
			onChangeText={onChangeText}
			labelStyle={{
				fontFamily: 'sf-pro-rounded-semibold',
				color: '#000000',
				fontSize: 17
			}}
			containerStyle={{
				paddingLeft: 0,
				paddingRight: 0,
				...containerStyle
			}}
			inputContainerStyle={{
				borderBottomColor: '#029cf5',
				borderBottomWidth: 2
			}}
		/>
	)
}

export default Input
