import React, { useEffect } from 'react'
import moment from 'moment'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import MorningIcon from './MorningIcon'
import DayIcon from './DayIcon'
import NightIcon from './NightIcon'
import colours from '../constants/colours'

const ReminderListItem = ({ item, navigation, medication }) => {
	const iconLookup = () => {
		const time = moment(item.time, 'HH:mm')
		if (time.get('hour') <= 4) {
			console.log('night')
			return <NightIcon />
		} else if (time.get('hour') > 4 && time.get('hour') <= 10) {
			console.log('morning')
			return <MorningIcon />
		} else if (time.get('hour') > 10 && time.get('hour') <= 20) {
			console.log('day')
			return <DayIcon />
		} else {
			console.log('night')
			return <NightIcon />
		}
	}

	return (
		<View
			style={{
				marginLeft: 10,
				marginRight: 10,
				marginBottom: 10,
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 8
				},
				shadowOpacity: 0.24,
				shadowRadius: 10.32,
				elevation: 16
			}}
		>
			<ListItem
				key={item._id}
				Component={TouchableScale}
				friction={90}
				tension={100}
				activeScale={0.95}
				linearGradientProps={{
					colors: colours[medication.colour],
					start: [1, 0],
					end: [0.2, 0]
				}}
				title={`${item.time} - ${item.frequency}`}
				titleStyle={{ color: 'white', fontWeight: 'bold' }}
				subtitleStyle={{ color: 'white' }}
				subtitle={`${medication.name}`}
				chevron={{ color: 'white' }}
				containerStyle={{
					borderRadius: 25,
					height: 100
				}}
				leftIcon={iconLookup()}
				onPress={() => navigation.navigate('i', { _id: item._id })}
			/>
		</View>
	)
}

export default ReminderListItem
