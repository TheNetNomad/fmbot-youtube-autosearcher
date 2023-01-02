console.log("Initializing...");

import { Client, GatewayIntentBits, PermissionsBitField, AttachmentBuilder } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });

import search from'youtube-search';

var opts = {
  maxResults: 1,
  key: process.env.YOUTUBE_TOKEN
};

client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (message) => {
	//console.log(message.author.username + ": " + message.content);
	message.embeds.forEach(embed => {
		let fmJSON = embed.toJSON();
		//console.log(fmJSON);
		if (fmJSON.author.name.includes("Now playing -") || fmJSON.author.name.includes("Last track for")) {
			let testStr = fmJSON.description;
			let name = /\[(.*)\]/.exec(testStr);
			let artist = /[By]+(.*)[|]+/.exec(testStr);
			//console.log(name[1] + artist[1]);
			search(name[1] + artist[1], opts, function(err, results) {
			  if(err) return console.log(err);
			
			  message.channel.send("Searched for " + name[1] + " on YouTube: " + results[0].link);
				//console.log(results);
			});
		}
	})

});

console.log("Connecting...");
client.on('debug', console.log);
client.on('error', console.error);
client.on('warning', console.warn);
client.login(process.env.DISCORD_TOKEN);
