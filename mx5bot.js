var Discord = require("discord.js");
var bot = new Discord.Client();

//pingpong bot
bot.on("message", msg => {
    if (msg.content.startsWith("!ping")) {
        msg.channel.sendMessage("pong!");
    }
});

bot.on('ready', () => {
  console.log('I am ready!');

});

bot.login("insert token here");
