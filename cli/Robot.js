const util = require('./util')

class MrYumRobot {
    constructor() {
        this.xPos = 0,
        this.yPos = 0;
        this.direction = util.direction.NORTH
        this.limit = util.limits
        this.isRobotPlaced =  false
    }

    onPlaceRobot(x, y, f){
        if(this.isValideCoord(x, y) && this.isValidDirection(f)){
            this.xPos = x
            this.yPos = y
            this.direction = f
        }else {
            console.log('INVALID COORD', x, y, f);
        }
    }
    /**
     * Check if is valid coordinates
     * @param {*} x 
     * @param {*} y 
     */
    isValideCoord(x, y){
        console.log((x <= this.limit.x && x >= 0));
        if((x <= this.limit.x && x >= 0) && (this.yPos <= this.limit.y && y>=0)){
            return true
        }

        return false
    }

    /**
     * Check if it is a valide direction
     * @param {*} direction 
     * @returns 
     */
    isValidDirection(direction){
        const directions =  Object.values(util.direction)
        if(!directions.includes(direction)){
            return false
        }
        return true
    }

    onMoveRobot(){
        console.log(this.direction);
        switch (this.direction) {
            case util.direction.NORTH: 
                if(this.yPos + 1 < this.limit.y){
                    this.yPos += 1
                }

                break
                
            case util.direction.EAST: 
                if(this.xPos + 1 < this.limit.x){
                    this.xPos += 1
                }

                break

            case util.direction.SOUTH: 
                if(this.yPos - 1 >=0){
                    this.yPos -= 1
                }

                break

            case util.direction.WEST: 
                if(this.xPos - 1 >= 0){
                    this.xPos -= 1
                
                }
                break
            default:
                console.log('INVALID DIRECTIO');
                break
        }
    }

    /**
     * Turn robot left
     */
    onTurnLeft(){
        if(this.direction === 'NORTH'){
            this.direction = util.direction.WEST
        }else if(this.direction === 'EAST'){
            this.direction = util.direction.NORTH
        }else if(this.direction === 'SOUTH'){
            this.direction = util.direction.EAST
        }else if(this.direction === 'WEST'){
            this.direction = util.direction.SOUTH
        }
    }

    /**
     * Turn robot right
     */
    onTurnRight(){
        if(this.direction === 'NORTH'){
            this.direction = util.direction.EAST
        }else if(this.direction === 'EAST'){
            this.direction = util.direction.SOUTH
        }else if(this.direction === 'SOUTH'){
            this.direction = util.direction.WEST
        }else if(this.direction === 'WEST'){
            this.direction = util.direction.NORTH
        }
    }

    /**
     * Report robot position
     */
    onReportRobotPosition(){
        return `X: ${this.xPos} | Y: ${this.yPos} | Direction: ${this.direction}`
    }
    
}

module.exports = MrYumRobot