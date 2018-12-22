const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`OFFICIAL HOST`,'https://www.twitch.tv/By:ZoZ');
  console.log('ONLINE');
});
client.login('NTExNDczNzgyNzEyNjk2ODMy.DwAHrg.MKmMQac-9mtUzXNL08vRVqxde5g');