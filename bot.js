const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

const TOKEN = process.env.TOKEN
client.login(TOKEN)

client.once('ready', () => {
	console.log('bot connected');
	client.channels.cache.find(channel => channel.name === 'emigo-bot').send("emigo chanenl"); // for discord v12
});

// let myChannel = '774002239110250517'
