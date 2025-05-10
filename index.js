const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const message = req.body.message;

    const LINE_ACCESS_TOKEN = '10n5ArHstmNHC68eoagK+r+nHLNF1xT6sgDeYbesjSD51ZCb7VQCC1V37E6/gvMjoAZSxR6HgJy4O8jSA4dcfrD0LOQ+tDA0ga8SOdjhMx4wdhzRB7FQteRykxDFqG92PI0t/rFLhvSrAZReTTknXgdB04t89/1O/w1cDnyilFU=';
    const GROUP_ID = 'cd93c667b8397001bf2503a7d99c8d30a';

    try {
      await axios.post('https://api.line.me/v2/bot/message/push', {
        to: GROUP_ID,
        messages: [
          {
            type: 'text',
            text: message
          }
        ]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINE_ACCESS_TOKEN}`
        }
      });

      res.status(200).send('LINE通知送信完了');
    } catch (error) {
      console.error('LINE送信失敗:', error.response ? error.response.data : error.message);
      res.status(500).send('送信エラー');
    }
  } else {
    res.status(200).send('This endpoint accepts POST requests');
  }
};
