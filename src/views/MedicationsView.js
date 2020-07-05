import React, { useContext, Fragment } from 'react'
import { NavigationEvents } from 'react-navigation'
import { AntDesign } from '@expo/vector-icons'
import H1 from '../components/H1'
import MedicationListItem from '../components/MedicationListItem'
import { SwipeListView } from 'react-native-swipe-list-view'
import SwipeButton from '../components/SwipeButton'
import { BlurView } from 'expo-blur'
import { Context as MedicationContext } from '../context/MedicationContext'

const MedicationsView = ({ navigation }) => {
	const {
		state: { medications },
		fetchMedications,
		deleteMedication
	} = useContext(MedicationContext)

	return (
		<Fragment>
			<NavigationEvents onWillFocus={fetchMedications} />
			<SwipeListView
				contentInset={{ top: 90, bottom: 80 }}
				contentOffset={{ y: -90 }}
				ListHeaderComponent={<H1>Medications</H1>}
				ListHeaderComponentStyle={{ paddingLeft: 16, paddingRight: 16 }}
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
				backgroundColor='transparent'
				onPress={() => navigation.navigate('AddMedication')}
			/>
		),
		headerBackground: (
			<BlurView style={{ flex: 1 }} tint='light' intensity={90} />
		),
		headerTransparent: true
	}
}

export default MedicationsView
