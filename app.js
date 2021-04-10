/*necessary requires*/
const Discord = require('discord.js');
const client = new Discord.Client();
/*file requires*/
const comDiscord = require(__dirname+'/comunication/dc.js');
const mobafire = require(__dirname+'/comunication/mobafire.js');
const token = require(__dirname+'/token.js');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	let comandSplit = comDiscord.searchComand(msg.content);
	mobafire.connect(comandSplit)
});

client.login(token);