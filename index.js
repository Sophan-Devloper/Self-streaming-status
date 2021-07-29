const { Client } = require('discord.js-selfbot-v11')
const BOT = new Client();
const { TOKEN } = require('./config.json');
BOT.on('ready', () => { 
    BOT.user.setActivity("with depression", {
        type: "STREAMING",
        url: "https://www.twitch.tv/monstercat"
      });
   console.log(`${BOT.user.username} Successfully Logged in!`)
})

BOT.login(TOKEN);
