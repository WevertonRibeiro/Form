import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/home/index';
import Login from './pages/login/index';
import Form from './pages/form/index';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Form" component={Form} />
                <AppStack.Screen name="Login" component={Login} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}