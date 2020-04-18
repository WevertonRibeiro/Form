import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingTop: 50,
        backgroundColor: 'white'
    },
    textheader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        marginBottom: 5,
        borderRadius: 4
    },
    itemTitle: {
        fontWeight: 'bold'
    },
    btnNovoPedido: {
        margin: 10,
        marginTop: 5,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        height: 50
    },
    btnNovoText: {
        color: 'white'
    }
});