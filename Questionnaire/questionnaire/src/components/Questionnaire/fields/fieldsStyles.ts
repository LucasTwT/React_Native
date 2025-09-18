import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // field styles:
        fieldTitleText: {
        color: 'white',
        fontSize: 30
    },

    // Select field styles:
    selectContainerView: {
        padding: 10,
        alignItems: 'center',
        gap: 20
    },

    // Text area field styles:
    textareaContainerView: {
        padding: 10,
        alignItems: 'center',
        gap: 20,
    },

    textareaTextInput: {
     color: 'black',
     backgroundColor: 'white',
     borderRadius: 8,
     width: '100%',    // se adapta a pantalla
     height: 200,
    }

})