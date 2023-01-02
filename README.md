# Discord .fmbot Youtube Autosearcher
(.fmbot)[https://fmbot.xyz/] is a bot that allows you to share your "scrobbling" statistics on discord, which has led to an unfortunate trend in many servers of users using it to share what they are currently listening to instead of giving you a link to take you right to the song. This bot does just that, listening for an fmbot embed and then retreivng the song from youtube. 

## Developement Status
This was spun out of a larger swiss-army-knife bot I'm building for my server, so this hasn't been tested on it's own and may have issues that came from the gutting. Let me know if you encounter any and I will fix them at earliest convienence. That said, don't expect this bot to get any more sophisticated or for me to eventually host a public instance. 

## Usage
Before running, you'll need to install the discord.js and youtube-search libraries library with 

`npm install discord.js`
`npm install youtube-search`

You will also need to set two envronmental variables:

DISCORD_TOKEN - Your bot's discord token  
YOUTUBE_TOKEN - your youtube API token

and then just fire it up with

`node index.mjs`

This is not super comprehensive documentation, because the bot is small, so if you haven't already messed with self-hosting discord bots this all might read like greek. That's ok, I didn't know any of this junk until recently! If you need a hand just reach out and I can help you get started.
