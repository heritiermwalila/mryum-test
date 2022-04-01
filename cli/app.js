const argv = require('yargs')
.usage('Usage: <command> [Options]')
.command('run', 'Run the robot', {
    prompt: {
        alias: 'r'
    }
})
.example('run', 'Run the prompt')
.options({
    hel: {
        alias: 'h',
        description: 'Help'
    }
}).demandCommand(1, 'You need the run commadn to start the app').argv

const RobotHandler = require('./Handler')

const robot = new RobotHandler()

robot.init()