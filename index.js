const minimist = require('minimist')

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

    case 'today':
        require('./cmds/today')(args)
        break

    default:
        console.error(`"${cmd}" is not a valid command!`)
  }
  console.log('---.---.---.---.---')
  console.log(args);
  console.log(cmd)
}