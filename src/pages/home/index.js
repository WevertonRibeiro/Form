import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { View, FlatList, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Home(){

    const [pedidos, setPedidos] = useState([]);
    const navigation = useNavigation();

    AsyncStorage.getItem("Logado").then((data) => {
        if (!(data !== null)){
            AsyncStorage.removeItem("Logado");
            navigation.navigate('Login');
        }
    });

    async function loadPedidos(){
        const response = await api.get('pedidos');
        setPedidos(response.data);
    }

    useEffect(() => {
        loadPedidos();
    }, []);


    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.textheader}>Pedidos</Text>
            </View>

            <FlatList
                data={pedidos}
                keyExtractor={pedidos => String(pedidos.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: pedido}) => (
                    <View style={styles.itemContainer}>
                        <Text><Text style={styles.itemTitle}>Nome:</Text> {pedido.nome}</Text>

                        <Text><Text style={styles.itemTitle}>Pedido:</Text> {pedido.produto}</Text>

                        <Text style={styles.itemTitle}>Mensagem:</Text>
                        <Text>{pedido.msg}</Text>
                    </View>
                )}
            />

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Form');
                }}
                style={styles.btnNovoPedido}
            >
                <Text style={styles.btnNovoText}>Novo pedido</Text>
            </TouchableOpacity>

        </View>

        
    );
}