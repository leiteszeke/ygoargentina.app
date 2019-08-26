// Dependencies
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// Components
import Button from '../../components/Button';
import Input from '../../components/Input';
import Layout from '../../components/Layout';
// Hooks
import { useNavigation } from '../../components/Navigation/hooks';

const Login = () => {
    const [data, setData] = useState({});
    const { goTo } = useNavigation();

    const setValue = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    return (
        <Layout noScroll title="Ingresar">
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Input name="email" onChange={ setValue } placeholder="Email" />
                <Input name="password" onChange={ setValue } placeholder="Contraseña" secure={ true } />
            </View>
            <View style={{ height: 72, marginTop: 12 }}>
                <Button text="Ingresar" />
                <TouchableOpacity
                    onPress={ goTo('Register') }
                    style={{ alignItems: 'center', height: 20, justifyContent: 'center', marginTop: 8 }}
                >
                    <Text style={{ color: '#000000', fontSize: 16 }}>CREAR CUENTA</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default Login;