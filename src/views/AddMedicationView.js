import React, { useState, useContext } from 'react'
import { View } from 'react-native'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'
import styled from 'styled-components'
import H1 from '../components/H1'
import Input from '../components/Input'
import ColourPicker from '../components/ColourPicker'
import ColouredPillBottleFullIcon from '../components/ColouredPillBottleFullIcon'
import CounterInput from '../components/CounterInput'
import Button from '../components/Button'
import colours from '../constants/colours'
import { Context as MedicationContext } from '../context/MedicationContext'
import MedicationsView from './MedicationsView'

const StyledView = styled.View`
	flex: 1;
	padding-left: 16px;
	padding-right: 16px;
`

const AddMedicationView = () => {
	const {
		state: { medications },
		addMedication
	} = useContext(MedicationContext)
	const [name, setName] = useState('')
	const [doseSize, setDoseSize] = useState('')
	const [colour, setColour] = useState('orange')
	const [count, setCount] = useState('0')

	const handleCount = newCount => {
		if (newCount <= 0) {
			setCount('0')
		} else {
			setCount(newCount.toString())
		}
	}
	return (
		<KeyboardAvoidingScrollView>
			<StyledView>
				<View>
					<H1>Add Medication</H1>
					<Input
						label='Name'
						value={name}
						onChangeText={setName}
						containerStyle={{ marginBottom: 10 }}
					/>
					<Input
						label='Dose size'
						value={doseSize}
						onChangeText={setDoseSize}
						containerStyle={{ marginBottom: 10 }}
					/>
					<ColourPicker
						colours={colours}
						selected={colour}
						handleOnPress={setColour}
					/>
					<ColouredPillBottleFullIcon
						height={200}
						primary={colours[colour][0]}
						secondary={colours[colour][1]}
						style={{ marginTop: 50 }}
					/>
				</View>
				<CounterInput
					value={count}
					label='Count'
					handleOnChange={setCount}
					handleOnAdd={() => handleCount(parseInt(count) + 1)}
					handleOnMinus={() => handleCount(parseInt(count) - 1)}
					style={{ marginBottom: 10 }}
				/>
				<Button
					title='Save'
					onPress={() =>
						addMedication(
							name,
							doseSize,
							colour,
							count,
							medications
						)
					}
				/>
			</StyledView>
		</KeyboardAvoidingScrollView>
	)
}

AddMedicationView.navigationOptions = {
	headerStyle: {
		borderBottomWidth: 0
	}
}

export default AddMedicationView
