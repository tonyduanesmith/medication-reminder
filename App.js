import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AddMedicationView from './src/views/addmedication/AddMedicationView'
import AddReminderView from './src/views/addreminder/AddReminderView'
import MedicationsView from './src/views/medications/MedicationsView'
import OnboardingView from './src/views/onboarding/OnboardingView'
import RemindersView from './src/views/reminders/RemindersView'
import TodayView from './src/views/today/TodayView'
import BootView from './src/views/boot/BootView'
import AssetPreLoader from './src/utils/AssetPreLoader'
import { Provider as AppProvider } from './src/context/AppContext'
import { Provider as MedicationProvider } from './src/context/MedicationContext'
import { setNavigator } from './src/utils/navigationRef'
import { AntDesign } from '@expo/vector-icons'
import PillNavIcon from './src/components/PillNavIcon'

const medicationsFlow = createStackNavigator({
	Medications: MedicationsView,
	AddMedication: AddMedicationView
})

medicationsFlow.navigationOptions = {
	tabBarIcon: ({ tintColor }) => <PillNavIcon color={tintColor} />
}

const remindersFlow = createStackNavigator({
	Reminders: RemindersView,
	AddReminder: AddReminderView
})

remindersFlow.navigationOptions = {
	tabBarIcon: ({ tintColor }) => (
		<AntDesign name='clockcircleo' size={24} color={tintColor} />
	)
}

const todayFlow = createStackNavigator({
	Today: TodayView
})

todayFlow.navigationOptions = {
	tabBarIcon: ({ tintColor }) => (
		<AntDesign name='calendar' size={24} color={tintColor} />
	)
}

const switchNavigator = createSwitchNavigator({
	Boot: BootView,
	Onboarding: OnboardingView,
	mainFlow: createBottomTabNavigator(
		{
			Today: todayFlow,
			Medications: medicationsFlow,
			Reminders: remindersFlow
		},
		{
			tabBarOptions: {
				activeTintColor: '#029cf5',
				style: {
					borderTopWidth: 0
				},
				labelStyle: {
					fontSize: 11,
					fontFamily: 'sf-pro-rounded-semibold'
				}
			}
		}
	)
})

const App = createAppContainer(switchNavigator)

export default props => {
	return (
		<AppProvider>
			<MedicationProvider>
				<AssetPreLoader>
					<App
						ref={navigator => {
							setNavigator(navigator)
						}}
					/>
				</AssetPreLoader>
			</MedicationProvider>
		</AppProvider>
	)
}
