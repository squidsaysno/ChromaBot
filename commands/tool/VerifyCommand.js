const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VerifyCommand extends BaseCommand {
  constructor() {
    super('verify', 'tool', []);
  }

  async run(client, message, args) {
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**I need the permission** \`MANAGE_ROLES\` **to perform this command.**");
    
    const role = message.guild.roles.cache.get('775601167060434944');

    await message.member.roles.add(role.id).catch(err => console.log(err));
    message.channel.send('**Successfully verified!** ✅')
  }
}