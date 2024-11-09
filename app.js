const express = require('express');
const app = express();
const port = 3000;
const config = require('./config');

app.get('/', (req, res) => {
  const messages = config.messages;
  const today = new Date();
  const todayMessage = messages.find((message) => message.date.toDateString() === today.toDateString());
  if (todayMessage) {
    res.send(`
      <h1>Daily Positive Messages</h1>
      <ul>
        ${messages.map((message) => `
          <li>
            <h2>${message.message}</h2>
            <p>Posted on ${message.date.toLocaleDateString()}</p>
            <p>Type: ${message.type}</p>
          </li>
        `).join('')}
      </ul>
    `);
  } else {
    res.send('No messages today!');
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
