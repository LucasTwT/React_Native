import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: "black",
        padding: 20,
        gap: 20
    },
    primaryTitle: {
        textAlign: 'center',
        fontFamily: "changaBold",
        color: "white",
        fontSize: 32,
        lineHeight: 40
    },
    secondaryTitle: {
        textAlign: 'center',
        fontFamily: "changaRegular",
        color: "white",
        fontSize: 27,
        lineHeight: 35
    },

    definitionText: {
        textAlign: 'center',
        fontFamily: "changaRegular",
        color: "#00D9FF",
        fontSize: 25,
        lineHeight: 34
    },

    descriptionText: {
        fontFamily: "dotGothicRegular",
        color: "#787878",
        fontSize: 19,
        lineHeight: 27
    }
})