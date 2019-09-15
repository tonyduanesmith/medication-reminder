import React, { useContext } from 'react'
import { View, Text, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import OnboardItem from '../components/OnboardItem'
import { Context as AppContext } from '../context/AppContext'

const config = {
	dotStyle: { backgroundColor: 'rgba(225, 225, 225, 1)' },
	activeDotStyle: { backgroundColor: 'rgba(2,156,245,1)' },
	buttonStyle: { borderRadius: 15, backgroundColor: 'rgba(2,156,245,1)' }
}

const slides = [
	{
		key: 'lowMedication',
		title: 'Low Medication Reminders',
		image: require('../assets/onboarding/low-medication-reminder.png'),
		text: 'Be Alerted when your medication begins to run low',
		backgroundColor: '#000000'
	},
	{
		key: 'medicationReminder',
		title: 'Medication Reminders',
		image: require('../assets/onboarding/medication-reminder.png'),
		text:
			'Set daily reminders to make sure you are taking the correct medications on time',
		backgroundColor: '#000000'
	},
	{
		key: 'privacy',
		title: 'Privacy',
		image: require('../assets/onboarding/privacy.png'),
		text: 'Be assured that your data is stored privately and securely',
		backgroundColor: '#000000'
	}
]

const OnboardingView = () => {
	const { setHasOnboarded } = useContext(AppContext)
	const renderItem = ({ item }) => {
		return <OnboardItem item={item} />
	}
	return (
		<AppIntroSlider
			renderItem={renderItem}
			slides={slides}
			onDone={setHasOnboarded}
			bottomButton
			{...config}
		/>
	)
}

export default OnboardingView
