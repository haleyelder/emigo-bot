const Discord = require('discord.js');
const bot = new Discord.Client();
require('dotenv').config()

const TOKEN = process.env.TOKEN
bot.login(TOKEN)

bot.once('ready', () => {
	console.log('bot connected');
});


// channel = bot.channels.cache.get('774002239110250517');
// channel.send("test");

