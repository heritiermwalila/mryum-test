const Robot = require('../Robot')
const util = require('../util')

describe('Testing Robot', () => {
    let robot = null

    beforeEach(() => {
        robot = new Robot()
    })


    it('should initialise robot with zero coordinates', () => {
        
        expect(robot.xPos).toEqual(0)
        expect(robot.yPos).toEqual(0)
       
    })

    it('Should have a default direction to NORTH', () => {
        expect(robot.direction).toBe(util.direction.NORTH)
        // expect(robot.isRobotPlaced).toBeFalsy()
    })

    it('Should have a robot place state to FALSE', () => {
        expect(robot.isRobotPlaced).toBeFalsy()
    })

    it('Should place the robot to position 2,5 WEST', () => {
        robot.onPlaceRobot(2, 5, 'WEST')
        expect(robot.xPos).toBe(2)
        expect(robot.yPos).toBe(5)
    })

    it('Should move the robot forward north', () => {
        robot.onMoveRobot()
        expect(robot.yPos).toBe(1)
        expect(robot.xPos).toBe(0)
        
    })

    it('Should turn right', () => {
        robot.onPlaceRobot(2, 5, 'WEST')
        robot.onTurnRight()
        expect(robot.direction).toBe(util.direction.NORTH)
    })

    it('Should turn left', () => {
        robot.onPlaceRobot(2, 5, 'WEST')
        robot.onTurnLeft()
        expect(robot.direction).toBe(util.direction.SOUTH)
    })

    it('should report the position of the the robot', () => {

        robot.onPlaceRobot(2, 5, 'WEST')
        robot.onMoveRobot()
        robot.onReportRobotPosition()
        expect(robot.onReportRobotPosition()).toBe(`X: 1 | Y: 5 | Direction: WEST`)

    })

})