module.exports = (req, res) => {
  if (req.method === 'POST') {
    const events = req.body.events;
    if (events && events.length > 0) {
      const event = events[0];
      const source = event.source;

      console.log("📦 groupId:", source.groupId || source.userId || source.roomId);
    }
    res.status(200).send('OK');
  } else {
    res.status(200).send('This endpoint accepts POST requests from LINE platform.');
  }
};

