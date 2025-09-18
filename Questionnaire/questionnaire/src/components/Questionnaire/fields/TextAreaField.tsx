import { TextInput, View, Text } from "react-native";
import { styles } from "./fieldsStyles";

export function TextAreaField () {

    const { textareaContainerView, textareaTextInput, fieldTitleText } = styles

    return (
        <View style={textareaContainerView}>
            <Text style={fieldTitleText}>Enter your description:</Text>
            <TextInput multiline numberOfLines={50} style={ textareaTextInput } placeholder="Enter your user description" placeholderTextColor={'balck'}/>
        </View>
    )
}