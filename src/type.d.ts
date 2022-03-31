export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'

export interface IReport {
    x: string | number;
    y: string | number;
    direction: Direction;
}