import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/logoNomad.jpg'
import { Feather } from 'react-native-vector-icons';

export default function Login() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={Logo} style={styles.logo} />
                <TouchableOpacity style={styles.closeButton}>
                    <Feather name="x" size={30} color="#000000"/>
                </TouchableOpacity>
                <Text style={styles.message}>Olá.</Text>
                <Text style={styles.message}>Bem-vindo</Text>
                <Text style={styles.message}>de volta!</Text>


            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Insira seu CPF</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.title}>Digite sua senha de 8 caracteres</Text>
                <TextInput style={styles.input} secureTextEntry={true}/>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSenha}>
                    <Text style={styles.senhaText}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>

                    <Text style={styles.registerText}>Ainda não tem cadastro?</Text>
                    <Text>Faça agora</Text>
                    <Feather name="user" size={28} color="#000000" style={styles.registerIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
