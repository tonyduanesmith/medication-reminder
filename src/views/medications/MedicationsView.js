import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import H1 from '../../components/H1'
import TouchableScale from 'react-native-touchable-scale'
import colours from '../../constants/colours'
import PillBottleEmptyIcon from '../../components/PillBottleEmptyIcon'
import { Context as MedicationContext } from '../../context/MedicationContext'

const StyledView = styled.View`
	flex: 1;
	padding-left: 16px;
	padding-right: 16px;
`

const AddIcon = styled(AntDesign)`
	font-size: 30px;
	margin-right: 15px;
	color: #029cf5;
`

const MedicationsView = () => {
	const {
		state: { medications }
	} = useContext(MedicationContext)
	return (
		<StyledView>
			<H1>Medications</H1>
			{medications.map(med => {
				return (
					<ListItem
						key={med._id}
						Component={TouchableScale}
						friction={90}
						tension={100}
						activeScale={0.95}
						linearGradientProps={{
							colors: colours[med.colour],
							start: [1, 0],
							end: [0.2, 0]
						}}
						title={med.name}
						titleStyle={{ color: 'white', fontWeight: 'bold' }}
						subtitleStyle={{ color: 'white' }}
						subtitle={`${med.count - med.used} x ${med.doseSize}`}
						chevron={{ color: 'white' }}
						containerStyle={{
							borderRadius: 25,
							height: 130,
							marginBottom: 10
						}}
						leftIcon={PillBottleEmptyIcon}
					/>
				)
			})}
		</StyledView>
	)
}

MedicationsView.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<TouchableOpacity
				onPress={() => navigation.navigate('AddMedication')}
			>
				<AddIcon name='plus' />
			</TouchableOpacity>
		),
		headerStyle: {
			borderBottomWidth: 0
		}
	}
}

export default MedicationsView
