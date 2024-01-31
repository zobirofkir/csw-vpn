import { StyleSheet } from "react-native";

export const styleAuth = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f5f5f5f5',
        paddingHorizontal: 20,
    },
    input : {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        margin: 10,
        borderRadius: 10,
        elevation: 50,
        backgroundColor: 'white',
        textAlign: 'center'
    },
    touchable : {
        backgroundColor: '#341792',
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
        color: 'white',
        fontWeight: '900'
    }
})