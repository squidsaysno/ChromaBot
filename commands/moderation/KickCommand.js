const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You don't have permission to do this!**")
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given";
    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`You were kicked from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("#fc9403")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL())

    // Kick Command Itself
    if (!args[0]) return message.channel.send('**You need to mention a user to perform this!** \`ch!kick @user reason\`');
    if (!mentionedMember) return message.channel.send("**This member isn't in the server!**");
    if (!mentionedMember.kickable) return message.channel.send('**I do not have permission to kick that member.**');
    try {
      await mentionedMember.send(kickEmbed);
    } catch(err) {
      console.log(`**I was unable to message the member.**`);
    }

    try {
      await mentionedMember.kick(reason)
      message.channel.send('**Kick was Successful! ✅**')
    } catch(err) {
      console.log(err);
      message.channel.send("**I was unable to kick the member, do I have the permissions?**")
    }
  }
}