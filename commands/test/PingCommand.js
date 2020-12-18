const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('ping', 'Ping', []);
  }

  async run(client, message, args) {
    message.channel.send('Pong!');
  }
}