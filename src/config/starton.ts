import axios from 'axios';
import 'dotenv/config';

const startonApi = axios.create({
  baseURL: 'https://api.starton.io',
  headers: {
    'x-api-key': process.env.STARTON_API_KEY,
  },
});

export default startonApi;
