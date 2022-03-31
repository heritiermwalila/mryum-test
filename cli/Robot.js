const util = require('./util')

class MrYumRobot {
    constructor(){
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
        }
    }
    /**
     * Check if is valid coordinates
     * @param {*} x 
     * @param {*} y 
     */
    isValideCoord(x, y){
        if(x <= this.limit.x && x >= 0 && (this.y <= this.limit.y && y>=0)){
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
        switch (this.direction) {
            case util.direction.NORTH: {
                if(this.y + 1 < this.limit.y){
                    this.y += 1
                }

                return
            }
                
            case util.direction.EAST: {
                if(this.x + 1 < this.limit.x){
                    this.x += 1
                }

                return
            }

            case util.direction.SOUTH: {
                if(this.y - 1 >=0){
                    this.y -= 1
                }

                return
            }

            case util.direction.WEST: {
                if(this.x - 1 >= 0){
                    this.x -= 1
                }
            }
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