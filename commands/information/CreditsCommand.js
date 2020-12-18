const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class CreditsCommand extends BaseCommand {
  constructor() {
    super('credits', 'information', []);
  }

  async run(client, message, args) {
     const creditsEmbed = new Discord.MessageEmbed()
       .setTitle('Credits:')
       .setDescription('SquidSaysNo - Bot Creator, deadpool12 - Bot Thumbnail Maker, Hosted with Discloud.')
       .setTimestamp()
       .setFooter('Made by SquidSaysNo || SquidSaysNo#0001')
       .setColor("#008cff");
      message.channel.send(creditsEmbed);
  }
}