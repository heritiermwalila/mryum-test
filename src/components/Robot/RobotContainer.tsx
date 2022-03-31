import React from "react";
import {
  DIRECTIONS,
  getXCoordinate,
  getYCoordinate,
} from "../../lib/direction";
import { Direction } from "../../type";
import { Table } from "../Table";
import "./Robot.scss";

interface RobotContainerProps {
  name: string;
  renderBot: JSX.Element;
  onChangeDirection?: (direction: Direction) => void;
  currentDirection: Direction;
  onSetCoordinates?: (coordinates: { x: number; y: number }) => void;
  onMove?: () => void;
  onTurnLeft?: () => void;
  onTurnRight?: () => void;
  onResetPosition?: () => void;
  onPlaceRobot?: () => void;
  isPlaced?: boolean;
  onReport?: () => void;
  report?: Record<string, any>
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
            <div className="Robot-Control-Input">
              <input
                ref={inputRef}
                type="text"
                placeholder="Example: 0,2"
                className="Robot-Input"
                onChange={onInputValueChange}
              />
              <select
                name=""
                id="direction"
                defaultValue={currentDirection}
                onChange={(e) =>
                  onChangeDirection?.(e.target.value as Direction)
                }
              >
                {DIRECTIONS?.map((direction) => (
                  <option key={direction} value={direction}>
                    {direction}
                  </option>
                ))}
              </select>
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
        {isPlaced && (
          <div>
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
        )}

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
          <div>
              <table>
                  <thead>
                      <tr>
                          <td>X POSITION</td>
                          <td>Y POSITION</td>
                          <td>DIRECTION</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>{report?.x}</td>
                          <td>{report?.y}</td>
                          <td>{report?.direction}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </>}
      </div>
    </div>
  );
};

export default RobotContainer;
