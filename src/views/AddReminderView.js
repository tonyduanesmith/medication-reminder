import React from "react";
import { BlurView } from "expo-blur";

import ReminderDetails from "../components/ReminderDetails";

const AddReminderView = () => {
    return <ReminderDetails title="Add Reminder" />;
};

AddReminderView.navigationOptions = {
    headerStyle: {
        borderBottomWidth: 0,
    },
    headerBackground: (
        <BlurView style={{ flex: 1 }} tint="light" intensity={90} />
    ),
    headerTransparent: true,
};

export default AddReminderView;
