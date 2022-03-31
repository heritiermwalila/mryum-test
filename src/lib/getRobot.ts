import NorthRobot from '../images/north-robot.jpg'
import SouthRobot from '../images/south-robot.jpg'
import WestRobot from '../images/west-robot.jpg'
import EastRobot from '../images/east-robot.jpg'
import { Direction } from '../type'



export const getRobot = (direction: Direction) => {

    const robots = {
        NORTH: NorthRobot,
        SOUTH: SouthRobot,
        EAST: EastRobot,
        WEST: WestRobot,
    }

    return robots?.[direction]
}