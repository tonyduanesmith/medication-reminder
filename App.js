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
import { Provider as AppProvider } from './src/context/AppContext'

const medicationsFlow = createStackNavigator({
	Medications: MedicationsView,
	AddMedication: AddMedicationView
})

const remindersFlow = createStackNavigator({
	Reminders: RemindersView,
	AddReminder: AddReminderView
})

const switchNavigator = createSwitchNavigator({
	Boot: BootView,
	Onboarding: OnboardingView,
	mainFlow: createBottomTabNavigator({
		Today: TodayView,
		Medications: medicationsFlow,
		Reminders: remindersFlow
	})
})

const App = createAppContainer(switchNavigator)

export default () => {
	return (
		<AppProvider>
			<App />
		</AppProvider>
	)
}
