const { Client } = require('discord.js-selfbot-v11')
const BOT = new Client();
const { TOKEN, STATUS, TwitchURL } = require('./config.json');
BOT.on('ready', () => { 
    BOT.user.setActivity(`${STATUS}`, {
        type: "STREAMING",
        url: `${TwitchURL}`
      });
   console.log(`${BOT.user.username} Successfully Logged in!`)
})

BOT.login(TOKEN);
