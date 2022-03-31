import React from 'react';
import './App.css';
import { MrYumRobot, RobotContainer } from './components/Robot';
import { canRobotMove, getRobotPosition, getXCoordinate, getYCoordinate, isValideCoordinates, isValideDirection } from './lib/direction';
import { Direction, IReport } from './type';

function App() {

  const [report, setReport] = React.useState<IReport>()
  const [place, setPlace] = React.useState<boolean>(false)
  const [direction, setDirection] = React.useState<Direction>('NORTH')
  const [coord, setCoord] = React.useState<{x: number; y: number}>({x:getXCoordinate("0"),y:getYCoordinate("4")})

  /**
   * Move the robot forward
   */
  const onRobotMove = React.useCallback(() => {
    
    if(isValideDirection(direction)){
        let {x, y} = coord
        if(canRobotMove(x,y)){
          if(direction === 'NORTH'){
            if(y > 0){
              y -= 20;
              setCoord(prev => ({...prev, y}))
            }
          }else if(direction === 'SOUTH'){
            if(y < 80){
              y +=20
              setCoord(prev => ({...prev, y}))
            }
          }else if(direction === 'WEST'){
            if(x > 0){
              x -=20
              setCoord(prev => ({...prev, x}))
            }
          }else if(direction === 'EAST'){
            if(x < 80) {
              x += 20
              setCoord(prev => ({...prev, x}))
            }
          }
        }
    }
    
  }, [direction, coord])

  /**
   * Turn the robot left
   */
  const onRobotTurnLeft = React.useCallback(() => {
    if(isValideDirection(direction)){
      if(direction === 'NORTH'){
        setDirection('WEST')
      }else if(direction === 'WEST'){
        setDirection('SOUTH')
      }else if(direction === 'SOUTH'){
        setDirection('EAST')
      }else if(direction === 'EAST'){
        setDirection('NORTH')
      }
    }
  }, [direction])

  /**
   * Turn the robot right
   */
  const onRobotTurnRight = React.useCallback(() => {
    if(isValideDirection(direction)){
      if(direction === 'NORTH'){
        setDirection('EAST')
      }else if(direction === 'WEST'){
        setDirection('NORTH')
      }else if(direction === 'SOUTH'){
        setDirection('WEST')
      }else if(direction === 'EAST'){
        setDirection('SOUTH')
      }
    }
  }, [direction])

  const onPlaceRobot = React.useCallback(() => {
    console.log('PLACE X,Y,F', place);
    
    if(isValideDirection(direction) && isValideCoordinates(coord)){
      setPlace(true)
      const {x, y} = coord
      setReport({...getRobotPosition(x, y), direction})
    }
  }, [coord, direction, place])

  const onGetRobotReport = React.useCallback(() => {

    const {x, y} = coord
    
    setReport(prev => ({...prev, ...getRobotPosition(x, y), direction}))
    

  }, [coord, direction])


  return (
    <RobotContainer 
      name="Mr Yum" 
      renderBot={<MrYumRobot
        {...{
          ...coord,
          f: direction,
          place
        }}
        />}
      currentDirection={direction}
      onChangeDirection={direction => setDirection(direction)}
      onSetCoordinates={cords => {
        
          setCoord(prev => ({...prev, ...cords}))
      }}

      onMove={onRobotMove}
      onTurnLeft={onRobotTurnLeft}
      onTurnRight={onRobotTurnRight}
      onResetPosition={() => {
        setCoord({x:getXCoordinate('0'), y: getYCoordinate('0')})
        setDirection('NORTH')
        setPlace(false)
      }}
      onPlaceRobot={onPlaceRobot}
      isPlaced={place}
      onReport={onGetRobotReport}
      report={report}
      />
  );
}

export default App;
