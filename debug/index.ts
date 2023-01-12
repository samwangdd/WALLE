import CLI from '../src/cli'

const cli = new CLI()
const config = process.argv.slice(2);

cli.run(config)