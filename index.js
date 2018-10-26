const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  //defining cmd "command"
  const cmd = args._[0];

  console.log(args);
  console.log(cmd)
}