import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    image: {
        width: '100%',
        height: '90%'
    },
    buttonOpacity: {
        alignItems: 'center',
        padding: 20
    },
    buttonText: {
        backgroundColor: '#5633cb',
        padding: 10,
        paddingHorizontal: 150,
        borderRadius: 10,
        color: 'white',
        fontWeight: '900'
    },
    terms: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    welcomView: {
        alignItems: 'center',
        padding: 10
    },
    welcomText: {
        fontWeight: '900',
        color: 'black',
        textAlign: 'center'
    }
})