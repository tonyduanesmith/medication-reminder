import React, { useContext, Fragment } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import H1 from '../components/H1'
import MedicationListItem from '../components/MedicationListItem'
import { SwipeListView } from 'react-native-swipe-list-view'
import SwipeButton from '../components/SwipeButton'

import { Context as MedicationContext } from '../context/MedicationContext'

const StyledView = styled.View`
	padding-left: 16px;
	padding-right: 16px;
`

const MedicationsView = ({ navigation }) => {
	const {
		state: { medications },
		fetchMedications,
		deleteMedication
	} = useContext(MedicationContext)

	return (
		<Fragment>
			<NavigationEvents onWillFocus={fetchMedications} />
			<StyledView>
				<H1>Medications</H1>
			</StyledView>
			<SwipeListView
				keyExtractor={item => item._id.toString()}
				data={medications}
				renderItem={({ item }, rowMap) => (
					<MedicationListItem item={item} navigation={navigation} />
				)}
				renderHiddenItem={({ item }, rowMap) => (
					<SwipeButton
						iconName='delete'
						iconColor='#ffffff'
						iconBackgroundColor='#ff3a30'
						onDelete={() => deleteMedication(item._id, medications)}
					/>
				)}
				rightOpenValue={-115}
			/>
		</Fragment>
	)
}

MedicationsView.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<AntDesign.Button
				name='plus'
				size={30}
				color='#029cf5'
				backgroundColor='#ffffff'
				onPress={() => navigation.navigate('AddMedication')}
			/>
		),
		headerStyle: {
			borderBottomWidth: 0
		}
	}
}

export default MedicationsView
