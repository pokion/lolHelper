/*necessary requires*/
const Discord = require('discord.js');
const client = new Discord.Client();
/*file requires*/
const comDiscord = require(__dirname+'/comunication/dc.js');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	comDiscord.searchComand(msg.content)
});

client.login('NzI3NDUzOTQ0ODkyMzU4NzA2.XvsFHA.f3SbT7zkj_dWh0ziX2ttSOV7qRY');