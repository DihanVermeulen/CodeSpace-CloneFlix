import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://project-apis.codespace.co.za/api/movies'
})

export default instance;