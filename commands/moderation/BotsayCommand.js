const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('botsay', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**You do not have permission to perform this command.**")
    
    const messagetosay = args.join(" ");

    message.channel.send(messagetosay);
    message.delete();
  } catch (err) {
    console.log();
    message.channel.send(`I was unable to send the following messages: ${messagetosay}`)
  }
}