import React, { Fragment } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import H3 from './H3'

const ButtonIcon = styled(AntDesign)`
	font-size: 25px;
	color: #ffffff;
`

const Container = styled.View`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`

const CounterInput = ({
	value,
	label,
	handleOnAdd,
	handleOnMinus,
	handleOnChange
}) => {
	return (
		<Fragment>
			<H3>{label}</H3>
			<Container>
				<Button
					buttonStyle={{
						borderRadius: 13,
						width: 44,
						height: 44,
						backgroundColor: '#029cf5'
					}}
					icon={<ButtonIcon name='minus' />}
					onPress={handleOnMinus}
				/>
				<Input
					containerStyle={{ flex: 1 }}
					inputContainerStyle={{
						borderBottomColor: '#029cf5',
						borderBottomWidth: 2
					}}
					inputStyle={{
						textAlign: 'center',
						fontSize: 34,
						fontFamily: 'sf-pro-rounded-semibold'
					}}
					onChangeText={handleOnChange}
					value={value}
					keyboardType='number-pad'
				/>
				<Button
					buttonStyle={{
						borderRadius: 13,
						width: 44,
						height: 44,
						backgroundColor: '#029cf5'
					}}
					icon={<ButtonIcon name='plus' />}
					onPress={handleOnAdd}
				/>
			</Container>
		</Fragment>
	)
}

export default CounterInput
