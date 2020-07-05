import React, { useContext, Fragment } from 'react'
import { NavigationEvents } from 'react-navigation'
import { AntDesign } from '@expo/vector-icons'
import H1 from '../components/H1'
import ReminderListItem from '../components/ReminderListItem'
import { SwipeListView } from 'react-native-swipe-list-view'
import SwipeButton from '../components/SwipeButton'
import { BlurView } from 'expo-blur'
import { Context as RemindersContext } from '../context/RemindersContext'
import { Context as MedicationContext } from '../context/MedicationContext'

const RemindersView = ({ navigation }) => {
	const {
		state: { reminders },
		fetchReminders,
		deleteReminder
	} = useContext(RemindersContext)
	const {
		state: { medications }
	} = useContext(MedicationContext)

	return (
		<Fragment>
			<NavigationEvents onWillFocus={fetchReminders} />
			<SwipeListView
				contentInset={{ top: 90, bottom: 80 }}
				contentOffset={{ y: -90 }}
				ListHeaderComponent={<H1>Reminders</H1>}
				ListHeaderComponentStyle={{ paddingLeft: 16, paddingRight: 16 }}
				keyExtractor={item => item._id.toString()}
				data={reminders}
				renderItem={({ item }, rowMap) => (
					<ReminderListItem
						item={item}
						medication={medications.find(
							m => m._id === item.medication_id
						)}
						navigation={navigation}
					/>
				)}
				renderHiddenItem={({ item }, rowMap) => (
					<SwipeButton
						iconName='delete'
						iconColor='#ffffff'
						iconBackgroundColor='#ff3a30'
						onDelete={() => deleteReminder(item._id, reminders)}
					/>
				)}
				rightOpenValue={-115}
			/>
		</Fragment>
	)
}

RemindersView.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<AntDesign.Button
				name='plus'
				size={30}
				color='#029cf5'
				backgroundColor='transparent'
				onPress={() => navigation.navigate('AddReminder')}
			/>
		),
		headerBackground: (
			<BlurView style={{ flex: 1 }} tint='light' intensity={90} />
		),
		headerTransparent: true
	}
}

export default RemindersView
