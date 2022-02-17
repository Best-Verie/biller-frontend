import axios from 'axios';
import url from '../utils/url'

const getAllCards = async () => {
    const response = await axios.get(`${url}/api/v1/meter`);
    return response.data;
}

const addCard = async(body)=>{
    const response = await axios.post(`${url}/api/v1/meter`,body);
    return response.data;
}
const getBalance = async(body)=>{
    const response = await axios.get(`${url}/api/v1/transactions`,body);
    return response;
}

const AddTransation = async(body)=>{
    const response = await axios.post(`${url}/api/v1/transactions`,body);
    return response;
}


export{
    getAllCards,
    addCard,
    getBalance,
    AddTransation

}