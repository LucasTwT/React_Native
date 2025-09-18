import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        width: '100%',
        height: "auto",
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: 'black'
    },
    titleText: {
        fontSize: 30,
        color: 'white'
    },
    searchContainer: {
        padding: 30,
        gap: 15,
        borderBlockColor: 'white',
        borderWidth: 10
    },
    searchLabel: {
        fontSize: 18,
        color: 'white'
    },
    searchInput: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 3,
        textAlign: 'center',
        color: 'white'
    },
    linkContainer: {
        padding: 10
    },
    textLink: {
        color: '#772d8b',
        fontSize: 20
    },
    pokemonContainer: {
        padding: 30,
        flex: 1,
        borderWidth: 3,
        borderBlockColor: 'white'
    },
    pokemonText: {
        color: 'white',
        fontSize: 20,
    },
    pokemonScrollView: {
        flexDirection: 'row',
        height: 200,
    },
    pokemonImgs: {
        width: 200,
        height: 200,
    },
    pokemonButtonAddFavorite:{
        padding: 10,
        backgroundColor: '#558CED',
        width: 'auto',
        margin: 20
    },
    pokemonButtonRemoveFavorite:{
        padding: 10,
        backgroundColor: '#ef3054',
        width: 'auto',
        margin: 20
    },
    pokemonAbilitiesContainer: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 30,
        gap: 10
    },
    filterSelectionContainer: {
    paddingHorizontal: 20,
    zIndex: 1000,
    },
    filterDropdown: {
        borderColor: '#ccc',
    }
}) 