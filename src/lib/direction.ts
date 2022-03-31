import { Direction } from "../type"

export const DIRECTIONS = [
    'NORTH',
    'SOUTH',
    'WEST',
    'EAST'
]

export const isValideDirection = (direction: Direction) => DIRECTIONS.includes(direction)

export const canRobotMove = (x:number, y:number) => {
    if(x < 0 || x > 80 || y < 0 || y > 80){
        return false
    }
    return true
}

export const COORDINATE_REF: Record<string, number> = {
    "0": 0,
    "1": 20,
    "2": 40,
    "3": 60,
    "4": 80
}

export const COORDINATE_Y_REF: Record<string, number> = {
    "0": 80,
    "1": 60,
    "2": 40,
    "3": 20,
    "4": 0
}

export const getXCoordinate  = (index: string) => {
    return COORDINATE_REF[index]
}

export const getYCoordinate  = (index: string) => {
    return COORDINATE_Y_REF[index]
}

export const isValideCoordinates = (coords: {x: number, y: number}) => {
    const limits = [0,20,40,60,80]
    
    if(limits.includes(coords.x) && limits.includes(coords.y)){
        return true
    }
    return false
}

export const getRobotPosition = (x: number, y: number) => {
    const keys_x = Object.keys(COORDINATE_REF)
    const values_x = Object.values(COORDINATE_REF)

    const keys_y = Object.keys(COORDINATE_Y_REF)
    const values_y = Object.values(COORDINATE_Y_REF)

    const x_index = values_x.indexOf(x)
    const y_index = values_y.indexOf(y)

    return {
        x: keys_x[x_index],
        y: keys_y[y_index]
    }

}