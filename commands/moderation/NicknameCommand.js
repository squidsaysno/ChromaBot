const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("**You cannot use this command.**");
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("**I require the permission** \`MANAGE_NICKNAMES\` **to perform this command.**");

    //Variables
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");
    //Input checking
    if (!args[0]) return message.channel.send("**You must state a member to change their nickname.** \`ch!nickname @user nickname\`");
    if(!mentionedMember) return message.channel.send("**The member given is not in the server.**");
    if (!nickName) return message.channel.send("**You must give a nickname to perform this.**");
    if (!mentionedMember.kickable) return message.channel.send("**I can not kick that member because their role is higher than mine.**");
    //Executing
    await mentionedMember.setNickname(nickName).catch(err => console.log(err).then(message.channel.send("**Due to errors, I cannot add that nickname. Please try again!**")));
    message.channel.send("**Nickname was Successfully Changed! ✅**")
  }
}