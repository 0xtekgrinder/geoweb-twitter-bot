import axios from 'axios';
import 'dotenv/config';

const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com/2/',
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_API_KEY}`,
  },
});

export default twitterApi;
