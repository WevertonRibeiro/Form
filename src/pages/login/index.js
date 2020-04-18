import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Button } from 'react-native';
import styles from './styles';

export default function Login(){

    const navigation = useNavigation();
    
    // Usei fetch aqui e axios em outros lugares para mostrar um pouco mais do que sei
    function logar() {
        fetch(`http://localhost:3000/usuarios?user=${username}&senha=${password}`)
            .then((r) => r.json())
            .then((r) => {
                if(r.length > 0){
                    AsyncStorage.setItem("Logado", 'true');
                    navigation.navigate('Home');
                }else{
                    AsyncStorage.removeItem("Logado");
                }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.titleLogin}>LOGIN</Text>
            <TextInput
                placeholder = "Username"
                style={styles.TextInput}
                onChangeText={username => setUsername(username)}
            />
            <TextInput
                placeholder = "Password"
                secureTextEntry={true}
                style={styles.TextInput}
                onChangeText={password => setPassword(password)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={logar}
            >
                <Text style={styles.textEntrar}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}