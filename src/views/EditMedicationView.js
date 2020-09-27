import React, { useContext } from 'react'
import { Context as MedicationContext } from '../context/MedicationContext'
import MedicationDetails from '../components/MedicationDetails'
import { BlurView } from 'expo-blur'

const EditMedicationView = ({ navigation }) => {
	const {
		state: { medications },
		updateMedication
	} = useContext(MedicationContext)
	const _id = navigation.getParam('_id')
	const medication = medications.find(m => m._id === _id)

	return (
		<MedicationDetails
			title='Edit Medication'
			defaultName={medication.name}
			defaultDoseSize={medication.doseSize}
			defaultColour={medication.colour}
			defaultCount={medication.count}
			onSave={(name, doseSize, colour, count) =>
				updateMedication(
					name,
					doseSize,
					colour,
					count,
					medications,
					_id
				)
			}
		/>
	)
}

EditMedicationView.navigationOptions = {
	headerStyle: {
		borderBottomWidth: 0
	},
	headerBackground: (
		<BlurView style={{ flex: 1 }} tint='light' intensity={90} />
	),
	headerTransparent: true
}

export default EditMedicationView
