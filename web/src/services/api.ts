import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vac-20.herokuapp.com/'
})

export default api;
