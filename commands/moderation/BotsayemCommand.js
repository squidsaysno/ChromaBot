const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('botsayem', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**You do not have permission to perform this command.**")
    
    const messagetosay = args.join(" ");
    
    //Embed

    const sayEmbed = new Discord.MessageEmbed()
      .setTitle(messagetosay)
      .setTimestamp()
      .setFooter('Made by SquidSaysNo || SquidSaysNo#0001')
      .setColor("#ff0000");

    message.channel.send(sayEmbed);
    message.delete();
  } catch (err) {
    console.log();
    message.channel.send(`I was unable to send the following messages: ${messagetosay}`)
  }
}