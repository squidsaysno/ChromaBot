const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

  async run(client, message, args) {
    //ch!nuke reason
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('**You do not have permission to use this command.**')
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('**My role does not have the \`MANAGE_CHANNELS\` Permission.**')
    //Variables
    let reason = args.join(" ");
    const nukeChannel = message.channel;
    //Input Checking
    if (!reason) reason = "No reason given.";
    if (!nukeChannel.deletable) return message.channel.send("**This channel is not deletable.**")
    
    //Executing
    await nukeChannel.clone().catch(err => console.log(err));
    await nukeChannel.delete(reason).catch(err => console.log(err));


  }
}