import React, { useState } from "react";
import styled from "styled-components";
import { View } from "react-native";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import H1 from "./H1";
import Input from "./Input";
import ColourPicker from "./ColourPicker";
import ColouredPillBottleFullIcon from "./ColouredPillBottleFullIcon";
import CounterInput from "./CounterInput";
import Button from "./Button";
import colours from "../constants/colours";
import PropTypes from "prop-types";

const StyledView = styled.View`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
`;

const ReminderDetails = ({
    onSave,
    title,
    defaultName,
    defaultDoseSize,
    defaultColour,
    defaultCount,
}) => {
    const [name, setName] = useState(defaultName);
    const [doseSize, setDoseSize] = useState(defaultDoseSize);
    const [colour, setColour] = useState(defaultColour);
    const [count, setCount] = useState(defaultCount.toString());

    const handleCount = newCount => {
        if (newCount <= 0) {
            setCount("0");
        } else {
            setCount(newCount.toString());
        }
    };
    return (
        <KeyboardAvoidingScrollView
            contentInset={{ top: 44 }}
            contentOffset={{ y: -44 }}
        >
            <StyledView>
                <View>
                    <H1>{title}</H1>
                    <Input
                        label="Name"
                        value={name}
                        onChangeText={setName}
                        containerStyle={{ marginBottom: 10 }}
                    />
                    <Input
                        label="Dose size"
                        value={doseSize}
                        onChangeText={setDoseSize}
                        containerStyle={{ marginBottom: 10 }}
                    />
                    <ColourPicker
                        colours={colours}
                        selected={colour}
                        handleOnPress={setColour}
                    />
                    <ColouredPillBottleFullIcon
                        height={200}
                        primary={colours[colour][0]}
                        secondary={colours[colour][1]}
                        style={{ marginTop: 50 }}
                    />
                </View>
                <CounterInput
                    value={count}
                    label="Count"
                    handleOnChange={setCount}
                    handleOnAdd={() => handleCount(parseInt(count) + 1)}
                    handleOnMinus={() => handleCount(parseInt(count) - 1)}
                    style={{ marginBottom: 10 }}
                />
                <Button
                    title="Save"
                    onPress={() =>
                        onSave(name, doseSize, colour, parseInt(count))
                    }
                />
            </StyledView>
        </KeyboardAvoidingScrollView>
    );
};

ReminderDetails.propTypes = {
    defaultName: PropTypes.string,
    defaultDoseSize: PropTypes.string,
    defaultColour: PropTypes.string,
    defaultCount: PropTypes.number,
};

ReminderDetails.defaultProps = {
    defaultName: "",
    defaultDoseSize: "",
    defaultColour: "orange",
    defaultCount: 0,
};

export default ReminderDetails;
