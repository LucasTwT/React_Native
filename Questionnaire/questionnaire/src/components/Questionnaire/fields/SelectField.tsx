import { View, Text } from "react-native";
import { useQuestionnaireContext } from "@/src/context/questionnaireContext";
import DropDownPicker from 'react-native-dropdown-picker';
import { GenderValue } from "../questionnaire.d";
import { styles } from "./fieldsStyles";
import { useState } from "react";

export function SelectField() {
    const { updateQData, state } = useQuestionnaireContext()
    const { userQData } = state
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Woman', value: GenderValue.woman },
        { label: 'Man', value: GenderValue.man },
    ]);

    const { selectContainerView, fieldTitleText } = styles

    return (
        <View style={selectContainerView}>
            <Text style={fieldTitleText}>
                Enter your gender:
            </Text>
            <DropDownPicker
                open={open}
                value={userQData.genderValue}
                items={items}
                setOpen={setOpen}
                setItems={setItems}
                placeholder="Enter your gender"
                setValue={(callback) => {
                    const newVal = callback(userQData.genderValue)
                    updateQData({ field: 'genderValue', value: newVal })
                }}
            />
        </View>
    )
}
