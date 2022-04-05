import React from "react";
import {
  DIRECTIONS,
  getXCoordinate,
  getYCoordinate,
} from "../../../lib/direction";
import { Direction, IReport } from "../../../type";
import RobotMovementController from "../../Controls/RobotMovementController";
import CoordinateInput from "../../Cordinate/Input";
import DirectionList from "../../DirectionList";
import { Table } from "../../Table";
import RobotReport from "../Report/RobotReport";
import "../Robot.scss";

export interface RobotContainerProps {
  name: string;
  renderBot: JSX.Element;
  currentDirection: Direction;
  isPlaced: boolean;
  onChangeDirection?: (direction: Direction) => void;
  onSetCoordinates?: (coordinates: { x: number; y: number }) => void;
  onMove?: () => void;
  onTurnLeft?: () => void;
  onTurnRight?: () => void;
  onResetPosition?: () => void;
  onPlaceRobot?: () => void;
  onReport?: () => void;
  report?: IReport
}
const RobotContainer = ({
  name,
  renderBot,
  onChangeDirection,
  currentDirection,
  onSetCoordinates,
  onMove,
  onTurnLeft,
  onTurnRight,
  onResetPosition,
  onPlaceRobot,
  isPlaced,
  onReport,
  report
}: RobotContainerProps) => {
  const [getX, setGetX] = React.useState(0);
  const [getY, setGetY] = React.useState(0);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.value.startsWith('PLACE')){
      
    }
    const coordinates = e.target.value?.split(",");
    if (!coordinates.every((coord) => Number.isInteger(+coord))) {
      alert("Invalid coordinates");
    } else {
      const x = coordinates?.[0];
      const y = coordinates?.[1];
      setGetX(getXCoordinate(x));
      setGetY(getYCoordinate(y));
      onSetCoordinates?.({ x: getXCoordinate(x), y: getYCoordinate(y) });
    }
  };

  const onPlaceRobotBtnHandler = () => {
    onSetCoordinates?.({ x: getX, y: getY });
    onPlaceRobot?.();
  };

  const onResetBtnHandler = () => {
    onResetPosition?.();
    setGetY(0);
    setGetX(0);

    if (inputRef?.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="Robot-Container">
      <h1>{name} Robot</h1>
      <Table>{renderBot}</Table>

      <div className="Robot-Control">
        {!isPlaced && (
          <>
            <h4>Intialization</h4>
            <p>
              Enter coordinates and select direction to place the robot on the
              table
              
            </p>
            <strong>Coordinate start from 0 to 4</strong>
            <div className="Robot-Control-Input">
              <CoordinateInput {...{onInputValueChange, ref: inputRef}} />
              <DirectionList {...{currentDirection, directions: DIRECTIONS, onChangeDirection: (value) => onChangeDirection?.(value)}} />
              <div>
                <button
                  className="Button Button-Place"
                  onClick={onPlaceRobotBtnHandler}
                >
                  Place the bot on the table
                </button>
              </div>
            </div>
          </>
        )}
        
        <RobotMovementController {...{isPlaced, onTurnLeft, onMove, onTurnRight}}/>

        {isPlaced && <>
          <div>
            <h4>Report & Reset robot</h4>
            <button className="Button Button-Black" onClick={onResetBtnHandler}>
              Reset robot
            </button>
            <button className="Button Button-Black" onClick={onReport}>
              Report
            </button>

            
          </div>
          <RobotReport {...{report}}/>
        </>}
      </div>
    </div>
  );
};

export default RobotContainer;
