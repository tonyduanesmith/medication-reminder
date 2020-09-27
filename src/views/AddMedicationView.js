import React, { useContext } from "react";
import { BlurView } from "expo-blur";

import { Context as MedicationContext } from "../context/MedicationContext";
import MedicationDetails from "../components/MedicationDetails";

const AddMedicationView = () => {
    const {
        state: { medications },
        addMedication,
    } = useContext(MedicationContext);

    return (
        <MedicationDetails
            title="Add Medication"
            onSave={(name, doseSize, colour, count) =>
                addMedication(name, doseSize, colour, count, medications)
            }
        />
    );
};

AddMedicationView.navigationOptions = {
    headerStyle: {
        borderBottomWidth: 0,
    },
    headerBackground: (
        <BlurView style={{ flex: 1 }} tint="light" intensity={90} />
    ),
    headerTransparent: true,
};

export default AddMedicationView;
