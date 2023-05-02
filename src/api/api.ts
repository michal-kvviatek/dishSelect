import axios from 'axios';
import { IFormData } from '../types/types';

const postEndpoint = 'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/';
const sendDataToApi = async (formData: IFormData) => {
    let id: number | undefined;

    switch (formData.type) {
        case 'pizza':
            id = 1;
            break;
        case 'soup':
            id = 2;
            break;
        case 'sandwich':
            id = 3;
            break;
        default:
            break;
    }
    const dataToSend = {
        ...formData,
        id,
    };
    try {
        const response = await axios.post(postEndpoint, dataToSend);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
        throw error;
    }
};

export default sendDataToApi;
