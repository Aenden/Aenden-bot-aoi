const aoi = require("aoi.js")

const bot = new aoi.Bot({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.onMessage()

bot.command({
  name: "ping",
  aliases: ["Ping"],
  code: `Pong! $Pingms`
})

bot.readyCommand({
  code: `$log[ready $userTag[$clientID]]`
})

bot.status({
  text: "with your gf",
  type: "competing"
})

bot.command({
  name: "help",
  aliases: ["h", "Help"],
  code: `$djsEval[(async () => {
const simplydjs = require('simply-djs');
const Discord = require('discord-js');
let embed1 =  new Dscord.EmbedMessage()
.setAuthor({name: message.aut or.username})
.setColor('BLURPLE');

let pages = [embed1];

simplydjs.EmbedPages(client, message, pages, {
 firstEmoji: '⏮️',
 backEmoji: '◀️',
 delEmoji: '🗑️',
 forwardEmoji: '⏭️',
 lastEmoji: '▶️',
 color: 'blurple'
});
})()]`
});
