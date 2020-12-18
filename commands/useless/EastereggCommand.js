const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class EastereggCommand extends BaseCommand {
  constructor() {
    super('easteregg', 'useless', []);
  }

  run(client, message, args) {
    message.channel.send('well, you found it. proud of yourself?');
  }
}