module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const events = req.body.events;
    if (events && events.length > 0) {
      const event = events[0];
      const source = event.source;

      // groupId / roomId / userId のいずれかを表示
      const id = source.groupId || source.roomId || source.userId;

      console.log("📦 groupId:", id);
    }
    res.status(200).send('OK');
  } else {
    res.status(200).send('This endpoint accepts POST requests from LINE platform.');
  }
};
