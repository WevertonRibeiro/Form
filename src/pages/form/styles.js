import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingTop: 50,
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    textheader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    TextInput: {
        width: '100%',
        height: 70,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 22,
        fontWeight: 'bold',
        borderColor: 'rgba(0,0,0,.1)',
        marginVertical: 10,
        letterSpacing: 1,
        color: '#454545',
        backgroundColor: 'white'
    },
    TextInputArea: {
        width: '100%',
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 22,
        fontWeight: 'bold',
        borderColor: 'rgba(0,0,0,.1)',
        marginVertical: 10,
        letterSpacing: 1,
        color: '#454545',
        backgroundColor: 'white'
    },
    container: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 50
    },
    btnEnviar: {
        marginTop: 5,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        height: 50
    },
    btnEnviarText: {
        color: 'white'
    }
});