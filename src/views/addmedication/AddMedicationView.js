import React, { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import H1 from '../../components/H1'
import Input from '../../components/Input'
import ColourPicker from '../../components/ColourPicker'
import colours from '../../constants/colours'

const StyledView = styled.View`
	flex: 1;
	padding-left: 16px;
	padding-right: 16px;
`

const AddMedicationView = () => {
	const [name, setName] = useState('')
	const [dose, setDose] = useState('')
	const [colour, setColour] = useState('orange')
	return (
		<StyledView>
			<H1>Add Medication</H1>
			<Input
				label='Name'
				value={name}
				onChangeText={setName}
				containerStyle={{ marginBottom: 10 }}
			/>
			<Input
				label='Dose size'
				value={dose}
				onChangeText={setDose}
				containerStyle={{ marginBottom: 10 }}
			/>
			<ColourPicker
				colours={colours}
				selected={colour}
				handleOnPress={setColour}
			/>
		</StyledView>
	)
}

AddMedicationView.navigationOptions = {
	headerStyle: {
		borderBottomWidth: 0
	}
}

export default AddMedicationView
