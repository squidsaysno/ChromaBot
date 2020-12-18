const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'fun', []);
  }

  async run(client, message, args) {
    const avatarEmbed = new Discord.MessageEmbed()
      .setThumbnail(message.author.displayAvatarURL())
      .setTitle(`${message.author.tag}'s Avatar`)
      .setDescription('You look fantastic!')
      .setFooter('Made by SquidSaysNo || SquidSaysNo#0001')
      .setTimestamp()
      .setColor("#00b3ff");

  message.channel.send(avatarEmbed);
      
  } catch (err) {
    console.log(err)
  }
}