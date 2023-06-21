import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Logo from '../../assets/logoNomad.jpg'
import { Feather } from 'react-native-vector-icons';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.header}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.iconsHeader}>
                        <TouchableOpacity>
                            <Feather name="eye" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="gift" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="user" size={28} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity>
                    <Text style={styles.cashbackText}>Ganhe até US$ 300 de cashback</Text>
                    <Text>Convide agora amigos para a Nomad</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.conta}>
                    <View style={styles.contaIcone}>
                        <Text style={styles.contaText}>Conta</Text>
                        <Feather name="dollar-sign" size={25} color="black" style={styles.iconeConta} />
                    </View>
                    <Text style={styles.valor}>$0,00</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerForm}>
                <TouchableOpacity style={styles.investimentos}>
                    <View style={styles.investimento}>
                        <Text style={styles.investimentosText}>Investimentos</Text>
                        <Feather name="bar-chart" size={25} color="black" style={styles.iconeInvestimentos} />
                    </View>
                    <Text style={styles.investimentoInfo}>Abra a sua conta e comece a investir em dólares.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cartoes}>
                    <Text style={styles.cartoesText}>Cartões</Text>
                    <Feather name="credit-card" size={25} color="black" style={styles.iconeCartoes} />
                </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button}>
                        <Feather name="plus-square" size={25} color="white"/>
                        <Text style={styles.buttonText}>Adicionar dinheiro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Feather name="dollar-sign" size={25} color="white"/>
                        <Text style={styles.buttonText}>Transferir dinheiro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
