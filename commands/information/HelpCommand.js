const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'information', []);
  }

  run(client, message, args) {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle('ch! - Commands:')
      .setDescription('help, ping, say, botsay, botsayem, kick, ban, avatar, invite, social, verify, nickname, nuke, purge, recruit, unban')
      .setThumbnail("https://cdn.discordapp.com/attachments/789362920189460490/789363062977069076/bettes.png")
      .setFooter('Made by SquidSaysNo || SquidSaysNo#0001')
      .setTimestamp();
    message.channel.send(helpEmbed)
  }
}