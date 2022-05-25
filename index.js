const GeminiAPI = require('gemini-api').default;
require('dotenv').config();

const restClient = new GeminiAPI({
    key: process.env.GEMINI_API_KEY,
    secret: process.env.GEMINI_API_SECRET,
    sandbox: true
});

restClient.newOrder({
    amount: 10,
    price: 10,
    side: 'buy',
    symbol: "ethusd",
}).then(res => console.log(res));