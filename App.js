import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AddMedicationView from './src/views/AddMedicationView'
import EditMedicationView from './src/views/EditMedicationView'
import AddReminderView from './src/views/AddReminderView'
import MedicationsView from './src/views/MedicationsView'
import OnboardingView from './src/views/OnboardingView'
import RemindersView from './src/views/RemindersView'
import TodayView from './src/views/TodayView'
import BootView from './src/views/BootView'
import AssetPreLoader from './src/utils/AssetPreLoader'
import { Provider as AppProvider } from './src/context/AppContext'
import { Provider as MedicationProvider } from './src/context/MedicationContext'
import { Provider as RemindersProvider } from './src/context/RemindersContext'
import { setNavigator } from './src/utils/navigationRef'
import { AntDesign } from '@expo/vector-icons'
import PillNavIcon from './src/components/PillNavIcon'
import BlurredTabbar from './src/components/BlurredTabbar'

const medicationsFlow = createStackNavigator({
	Medications: MedicationsView,
	AddMedication: AddMedicationView,
	EditMedication: EditMedicationView
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
			tabBarComponent: props => BlurredTabbar(props),
			tabBarOptions: {
				activeTintColor: '#029cf5',
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
				<RemindersProvider>
					<AssetPreLoader>
						<App
							ref={navigator => {
								setNavigator(navigator)
							}}
						/>
					</AssetPreLoader>
				</RemindersProvider>
			</MedicationProvider>
		</AppProvider>
	)
}
