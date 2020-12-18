const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'information', []);
  }

  async run(client, message, args) {
    const youtubeEmbed = new Discord.MessageEmbed()
      .setTitle('SquidSaysNo')
      .setURL('https://www.youtube.com/squidsaysno')
      .setThumbnail('http://pngimg.com/uploads/youtube/youtube_PNG2.png')
      .setColor('#ff0000')
      .addField('Check out SquidSaysNo\'s YouTube Channel!', 'Lots of fun and memes')
      .setTimestamp()
      .setFooter("SquidSaysNo", "https://lh3.googleusercontent.com/ogw/ADGmqu-fctw7oVFbjCx05Xs_oakpXQsPQmZk3WN0gw7xlg=s83-c-mo");
      const discordEmbed = new Discord.MessageEmbed()
        .setTitle('Join Squidsy\'s Lounge today!')
        .setURL('https://discord.com/invite/Tv7TsfRth3')
        .setThumbnail("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fsquare-logo-buttons%2F512%2Fdiscord-1-512.png&f=1&nofb=1")
        .setColor("#6a0dad")
        .addField('Join Squidsy\'s Lounge today!', 'Giveaways, Fun, Gaming, Custom Bots, and more!')
        .setTimestamp()
        .setFooter("Squidsy's Lounge V2","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fsquare-logo-buttons%2F512%2Fdiscord-1-512.png&f=1&nofb=1");
        
        await message.channel.send(youtubeEmbed).catch(err => console.log(err))
        await message.channel.send(discordEmbed).catch(err => console.log(err))
  }
}