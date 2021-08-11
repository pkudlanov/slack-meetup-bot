require('dotenv').config();
const token = process.env.SLACK_BOT;
const SlackBot = require('slackbots');

const bot = new SlackBot({
  token,
  name: 'Meetup Bot'
});

const sendMessage = (channel, message) => {
  bot.postMessage(
    channel,
    message
  );
};

module.exports = { sendMessage, bot };
