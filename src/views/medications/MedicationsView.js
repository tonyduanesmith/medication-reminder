import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import H1 from '../../components/H1'
import MedicationListItem from '../../components/MedicationListItem'

import { Context as MedicationContext } from '../../context/MedicationContext'

const StyledView = styled.View`
	flex: 1;
	padding-left: 16px;
	padding-right: 16px;
`

const AddIcon = styled(AntDesign)`
	font-size: 30px;
	margin-right: 15px;
	color: #029cf5;
`

const MedicationsView = () => {
	const {
		state: { medications }
	} = useContext(MedicationContext)

	return (
		<StyledView>
			<H1>Medications</H1>
			<FlatList
				keyExtractor={item => item._id.toString()}
				data={medications}
				renderItem={({ item }) => <MedicationListItem item={item} />}
			/>
		</StyledView>
	)
}

MedicationsView.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<TouchableOpacity
				onPress={() => navigation.navigate('AddMedication')}
			>
				<AddIcon name='plus' />
			</TouchableOpacity>
		),
		headerStyle: {
			borderBottomWidth: 0
		}
	}
}

export default MedicationsView
