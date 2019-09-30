import React from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import PillBottleEmptyIcon from './PillBottleEmptyIcon'
import colours from '../constants/colours'

const MedicationListItem = ({ item, navigation }) => {
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
					height: 130
				}}
				leftIcon={PillBottleEmptyIcon}
				onPress={() =>
					navigation.navigate('EditMedication', { _id: item._id })
				}
			/>
		</View>
	)
}

export default MedicationListItem
