import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';

export default function Form(){

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [produto, setProduto] = useState('');
    const [msg, setMsg] = useState('');

    function navigateBack(){
        navigation.goBack();
    }

    function novoPedido(){
        api.post('/pedidos', {
            id: null,
            nome: nome.text,
            produto: produto.text,
            msg: msg.text
        })
        .then(function (response){
            navigation.navigate('Home');
        }).catch(function (error){
            console.log(error);
        });

    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text 
                    style={styles.textheader}
                    onPress={navigateBack}
                >
                    {'<<'}
                </Text>
                <Text style={styles.textheader}>Novo Pedido</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text>Nome:</Text>
                    <TextInput 
                        style={styles.TextInput}
                        onChangeText={(text) => setNome({text})}
                    />

                    <Text>Produto:</Text>
                    <TextInput 
                        style={styles.TextInput}
                        onChangeText={(text) => setProduto({text})}
                    />

                    <Text>Mensagem:</Text>
                    <TextInput
                        style={styles.TextInputArea}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => setMsg({text})}
                    />

                    <TouchableOpacity
                        style={styles.btnEnviar}
                        onPress={novoPedido}
                    >
                        <Text style={styles.btnEnviarText}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}