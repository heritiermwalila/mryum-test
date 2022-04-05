const Robot = require('./Robot')
const inquire = require('inquirer')
const command = require('./help')
// const chalk = require('chalk');


class RobotHandler {
    constructor(){
        this.robot = new Robot()
    }
    init() {
        this.enterOrQuitBoard()
    }

    /**
     * Command execution
     */
    execute(cmd){
        
        if(cmd.startsWith('PLACE')){
            const [place, y, direction] = cmd.split(',')
            const getX = place.replace(/ /, '').split('')
            const x = getX[getX.length - 1]

            if(this.robot.isValideCoord(+x.trim(),+y.trim())){
                this.robot.onPlaceRobot(+x.trim(), +y.trim(), direction.trim())
            }else {
                console.log('ERROR: ', 'Invalid coordinates');
                return this.showCommandList()
            }
           
            
        }else {
            switch (cmd) {
                case 'MOVE':

                this.robot.onMoveRobot()
                    
                    break;

                case 'LEFT':
                    this.robot.onTurnLeft()
                    break

                case 'RIGHT':
                    this.robot.onTurnRight()
                    break

                case 'REPORT':
                    const report = this.robot.onReportRobotPosition()
                    console.log('---------------------------------');
                    console.log('\x1b[32m', report);
                    console.log('---------------------------------');

                    break
            
                default:
                    console.log('Invalid command');
                    break;
            }
        }
    }

    /**
     * Show robot starting board
     * @returns 
     */
    async enterOrQuitBoard(){
        const cmd = await inquire.prompt(command.cmd)

        if(cmd.action.toUpperCase() === 'ENTER') return this.getStarted()
        if(cmd.action.toUpperCase() === 'QUIT') return this.quitBoard()

        this.runRobot(cmd.action.toUpperCase())
    }

    async getStarted(){
        const cmd = await inquire.prompt({
            type: 'input',
            name: 'init',
            message: 'Use PLACE x,y,f: f for direction(NORTH,SOUTH,EAST,WEST)'
        })
        if(cmd.init.toUpperCase() === 'QUIT') return this.quitBoard()
        this.runRobot(cmd.init.toUpperCase())
    }

    showBoardMenu(){
        console.log('MR YUM ROBOT Menu');
        console.log('================================');
        console.log('PLACE x,y,f: f for Direction. will place the robot on the table');
        console.log('QUIT: will exit the game');
        this.showCommandList()
    }

    /**
     * 
     * @returns 
     */
    async showCommandList(){
        const cmd = await inquire.prompt(command.cmdList)
        // if(cmd.list.toUpperCase() === 'MENU') return this.showBoardMenu()
        if(cmd.list.toUpperCase() === 'QUIT') return this.quitBoard()

        this.runRobot(cmd.list.toUpperCase())
    }
    /**
     * Quit the game board
     */
    quitBoard(){
        console.log('Quit the game');
        process.exit()
    }

    /**
     * run the robot
     * @param {*} cmd 
     */
    runRobot(cmd){
        this.execute(cmd)
        console.log('Successfully moved');
        // this.showMovementMenu()
        this.showCommandList()
    }
}

module.exports = RobotHandler