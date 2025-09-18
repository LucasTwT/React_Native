import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, View, Text } from "react-native";
import { SelectField } from './fields/SelectField'
import { TextAreaField } from './fields/TextAreaField'
import { styles } from "./questionnnaireStyles";

export function QuestionnaireComponent() {
    const { contentView, titleText } = styles
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // hace que suba la UI en iOS
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={contentView}>
                <Text style={titleText}>Questionnaire</Text>
                    <SelectField />
                    <TextAreaField />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
