const minimist = require('minimist')
const error = require('./utils/error')
module.exports = () => {
  const args = minimist(process.argv.slice(2))
  //defining cmd "command"
  //const cmd = args._[0];
  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
      cmd = 'version'
    }

  if (args.help || args.h) {
        cmd = 'help'
    }

  switch (cmd){
    case 'help':
        require('./cmds/help')(args)
        break

    case 'version':
        require('./cmds/version')(args)
        break

    case 'tiempo':
        require('./cmds/today')(args)
        break
    case 'pronostico':
        require('./cmds/pronostico')(args)
        break
    case 'altura':
        require('./cmds/altura')(args)
        break

    default:
        error(`"${cmd}" no es un comando valido!`);
        break;
  }
  console.log('---.---.---.---.---')
  console.log(args);
  console.log('cmd:');
  console.log(cmd);
  console.log('---.---.---.---.---')
}