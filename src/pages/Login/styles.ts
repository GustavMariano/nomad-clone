import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFD401'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '16%',
        paddingStart: '7%'
    },
    logo:{
        height: 30,
        width: 30,
        marginBottom: 46
    },
    closeButton:{
        left: 300,
        bottom: 78,
    },
    message:{
        fontSize: 24,
        top: 40
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        paddingStart: '7%',
        paddingEnd: '7%'
    },
    title:{
        fontSize: 12,
        marginTop: 26,
        color: 'gray'
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom:12,
        fontSize:16,
        marginTop: 12
    },
    button:{
        backgroundColor: '#C8CDC7',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 16,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSenha:{
        width: '100%',
        borderRadius: 10,
        paddingVertical: 16,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    senhaText:{
        fontWeight: 'bold',
        fontSize: 12,
        color: '#137173'
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 14,
        color: 'gray'
    },
    buttonRegister:{
        marginTop: 30,
        borderTopWidth: 1,
        borderColor: '#C8CDC7'
    },
    registerText:{
        fontWeight: 'bold',
        marginBottom: 12,
        marginTop: 20
    },
    registerIcon:{
       left: 300,
       bottom: 40
    }
})