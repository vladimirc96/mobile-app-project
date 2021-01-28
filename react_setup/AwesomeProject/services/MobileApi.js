import LocalStorage from '../localStorage';
import axios from 'axios';

const MobileApi = axios.create({
    baseURL: 'http://localhost:8080'
});


MobileApi.interceptors.request.use(req => {
    let user = LocalStorage.getItem('currentUser');
    if(user !== null || user !== undefined){
        req.headers.Authorization = 'Bearer ' + user.accessToken;
    }
    return req;
});

export default MobileApi;

