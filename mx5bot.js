var Discord = require("discord.js");
var bot = new Discord.Client();

//pingpong bot
bot.on("message", msg => {
    if (msg.content.startsWith("!ping")) {
        msg.channel.sendMessage("pong!");
    }
});
bot.on('guildMemberAdd', (g, m, msg) => {
  console.log(`${m.user.username}`,"Joined",` ${g.name}`);

})

bot.on('guildMemberUpdate', (g, o, n, msg) => {
  console.log("Username change old:",o.nickname,"to :", n.nickname);
//  msg.channel.sendMessage("Welcome ", n.nickname," on the MX-5 Discord channel, enjoy your stay p.s. take a look at the rules");
//  msg.channel.sendMessage("changed nick");
});

bot.on('ready', () => {
  console.log('I am ready!');

});

bot.login("insert token here");
