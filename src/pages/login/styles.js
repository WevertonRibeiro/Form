import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50,
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
        color: '#454545'
    },
    titleLogin: {
        fontSize: 32,
        marginBottom: 70
    },
    button:{
        backgroundColor: 'tomato',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderRadius: 5,
        marginVertical: 10,
    },
    textEntrar:{
        color: 'white',
        fontSize: 22,
    },
    inputs:{
        width: '100%'
    }
});