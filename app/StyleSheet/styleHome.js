import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f5f5f5f5f5'
    },
    connect: {
        width: 200,
        height: 200
    },
    disConnect: {
        backgroundColor: '#341792',
        padding: 10,
        paddingHorizontal: 30,
        color: 'white',
        borderRadius: 10,
        marginTop: 10
    },
    picker: {
        justifyContent: 'flex-end',
        padding: 1,
        backgroundColor: '#341792',
        borderRadius: 5,
        color: 'white',
        margin: 10
    },
    logo: {
        width: '100%',
        height: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contry: {
        justifyContent: 'flex-end',
        padding: 1,
        borderRadius: 5,
        color: 'white',
        margin: 10,
        fontWeight: '900',
    }
})