export interface RobotMovementControllerProps {
    isPlaced: boolean;
    onTurnLeft?: () => void;
    onMove?: () => void;
    onTurnRight?: () => void;

}
export default function RobotMovementController({isPlaced, onTurnLeft, onMove, onTurnRight}: RobotMovementControllerProps){

    if(!isPlaced) return null
    return <div>
    <h4>Controls</h4>
    <button className="Button" onClick={onTurnLeft}>
      Turn Left
    </button>
    <button className="Button Button-Black" onClick={onMove}>
      Move
    </button>
    <button className="Button" onClick={onTurnRight}>
      Turn Right
    </button>
  </div>
}