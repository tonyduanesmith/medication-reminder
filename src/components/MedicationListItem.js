import React from 'react'
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import PillBottleEmptyIcon from './PillBottleEmptyIcon'
import colours from '../constants/colours'

const MedicationListItem = ({ item }) => {
	return (
		<ListItem
			key={item._id}
			Component={TouchableScale}
			friction={90}
			tension={100}
			activeScale={0.95}
			linearGradientProps={{
				colors: colours[item.colour],
				start: [1, 0],
				end: [0.2, 0]
			}}
			title={item.name}
			titleStyle={{ color: 'white', fontWeight: 'bold' }}
			subtitleStyle={{ color: 'white' }}
			subtitle={`${item.count - item.used} x ${item.doseSize}`}
			chevron={{ color: 'white' }}
			containerStyle={{
				borderRadius: 25,
				height: 130,
				marginBottom: 10
			}}
			leftIcon={PillBottleEmptyIcon}
		/>
	)
}

export default MedicationListItem
