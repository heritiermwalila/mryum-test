import { Direction } from "../../type";

export interface DirectionListProps {
    currentDirection: Direction, 
    directions: string[], 
    onChangeDirection: (direction: Direction) => void
}
export default function DirectionList({currentDirection, onChangeDirection, directions}: DirectionListProps){

    return <select
                name=""
                id="direction"
                defaultValue={currentDirection}
                onChange={(e) =>
                onChangeDirection?.(e.target.value as Direction)
                }
            >
                {directions?.map((direction) => (
                <option key={direction} value={direction}>
                    {direction}
                </option>
                ))}
            </select>

}