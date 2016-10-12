const calc = require('mathjs');
const pixie = require('pixie');

function math(bot, config) {
  config = config[math.name] || {};
  const format = config.format || 'Computed: {{answer}}';
  return function run(message, args, flags) {
    if (!args.length) return message.reply('Invalid arguments provided');
    try {
      const answer = calc.eval(args.join(' '), flags || {});
      message.reply(pixie.render(format, {answer}));
    } catch (e) {
      message.reply('An error occured');
    }
  }
}

math.command = 'math';
math.usage = 'math [options] <equation>';

module.exports = math;
