import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // ----- Pagina principal -----
    appContainer: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'black',
        gap: 40
    },
    
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4
    },

    headerImage: {
        width: 65,
        height: 65,
    },

    titleText: {
        fontSize: 40,
        color: 'white',
    },

    // ----- Search container component -----

    searchContainer: {
        padding: 30,
        gap: 15,
    },
    searchLabel: {
        fontSize: 30,
        color: 'white'
    },
    searchInput: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        borderRadius: 6,
        fontSize: 20
    },


    linkContainer: {
        padding: 10
    },
    textLink: {
        color: '#772d8b',
        fontSize: 20
    },

    // ----- Pokemon component -----

    pokemonContainer: {
        padding: 30,
        flex: 1,
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

    // Not Found styles:

    notFoundContainer: {
        alignItems: 'center'
    },

    notFoundImage: {
        width: 200,
        height: 200,
        objectFit: 'contain'
    },

    // -----  Dropdown picker styles -----
    

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
    },

    // -----  Nav bar styles -----
    
    navBarContainer: {
        alignContent: 'center',
        flexDirection: 'row',
        
        position: 'relative'
    },

    iconImage: {
        width: 50,
        height: 50
    }

}) 