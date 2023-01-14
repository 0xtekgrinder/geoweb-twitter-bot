import { TwitterApi } from 'twitter-api-v2';
import 'dotenv/config';

if (
  !process.env.TWITTER_API_KEY ||
  !process.env.TWITTER_API_SECRET ||
  !process.env.TWITTER_ACCESS_TOKEN ||
  !process.env.TWITTER_ACCESS_SECRET
) {
  throw new Error('Missing Twitter API credentials');
}

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

const twitterClient = client.readWrite;

export default twitterClient;
