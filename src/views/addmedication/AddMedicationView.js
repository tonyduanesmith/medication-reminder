import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import H1 from '../../components/H1'

const StyledView = styled.View`
	flex: 1;
	padding-left: 16px;
	padding-right: 16px;
`

const AddMedicationView = () => {
	return (
		<StyledView>
			<H1>Add Medication</H1>
		</StyledView>
	)
}

AddMedicationView.navigationOptions = {
	headerStyle: {
		borderBottomWidth: 0
	}
}

export default AddMedicationView
