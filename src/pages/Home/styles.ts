import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFD401'
    },
    containerHeader:{
        marginTop: '16%',
        marginBottom: '10%',
        paddingStart: '7%'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsHeader:{
        flexDirection: 'row',
        paddingEnd: '7%',
        gap: 20
    },
    logo:{
        height: 30,
        width: 30,
        marginBottom: 64
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        paddingStart: '7%',
        paddingEnd: '7%'
    },
    cashbackText:{
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 13
    },
    conta:{
        height: 45,
        fontSize:16,
        marginTop: 150
    },
    contaText:{
        fontWeight: 'bold',
        fontSize: 15
    },
    contaIcone:{
        flexDirection: 'row'
    },
    iconeConta:{
        left: 265,
        top: 20
    },
    valor:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10
    },
    investimentos:{
        marginTop: 30,
    },
    investimento:{
        flexDirection: 'row'
    },
    iconeInvestimentos:{
        left: 188,
        top: 25
    },
    investimentosText:{
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    investimentoInfo:{
        fontSize: 13,
        marginBottom: 30
    },
    cartoes:{
        marginTop: 15,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
    },
    iconeCartoes:{
        left: 240,
        top: 30
    },
    cartoesText:{
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 30,
        marginTop: 30
    },
    footer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 15
        
    },
    button:{
        backgroundColor: 'black',
        width: '50%',
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText:{
        fontSize: 18,
        color: 'white'
    },
    
})