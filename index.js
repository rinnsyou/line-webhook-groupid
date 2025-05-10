const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  const events = req.body.events;
  if (events && events.length > 0) {
    const event = events[0];
    const source = event.source;

    console.log("📦 groupId: ", source.groupId || source.userId || source.roomId);
  }

  res.sendStatus(200);
});

module.exports = app;
