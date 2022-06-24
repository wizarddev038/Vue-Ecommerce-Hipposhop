import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://10.194.200.12',
    withCredentials: false,
    headers: {
        Accept: 'applications/json',
        'Content-Type': 'applications/json'
    }
});

export default {
    getJsonProducts(){
        return apiClient.get('/products.php');
    }
};