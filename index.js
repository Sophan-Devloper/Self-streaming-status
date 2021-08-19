const { Client } = require('discord.js-selfbot-v11')
const BOT = new Client();
const { TOKEN, STATUS, TwitchURL } = require('./config.json');
// create an event listener
BOT.on('ready', () => { 
    BOT.user.setActivity(STATUS, {
        type: "STREAMING",
        url: TwitchURL
      });
   console.log(`${BOT.user.username} Successfully Logged in!`)
})
// log our bot in
BOT.login(TOKEN); //<= No need paste token here,plz go to config,json
