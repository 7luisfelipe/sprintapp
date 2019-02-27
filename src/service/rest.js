import { AsyncStorage } from 'react-native';
import { create } from 'apisauce';

const rest = create({
    baseURL: 'http://192.168.0.17:8080'
});

//Para tratativa de erros
//Executa depois de receber o resultado e antes de enviar para o response no metodo que o chamou
rest.addResponseTransform(response => {//Isso é um Middleware para resposta da API
    if(!response.ok) throw response; //Assim vai para um cath que temos no method que chama o rest
});

//Middleware na requisição
rest.addAsyncRequestTransform(request => async () => {
    //Recupera o token
    const token = await AsyncStorage.getItem('@sprint:token');
    //console.log('token...token');
    //console.log(token);

    if(token)
        request.headers['Authorization'] = `Bearer ${token}`;
});

export default rest;