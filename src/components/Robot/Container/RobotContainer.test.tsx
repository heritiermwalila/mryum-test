import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MrYumRobot from '../MrYumRobot/MrYum';
import RobotContainer from './RobotContainer';

jest.mock('../MrYumRobot/MrYum') 

test('RobotContainer not yet place on the table', () => {
  const {getByText} = render(<RobotContainer {...{
    name: 'Mr Yum',
    renderBot: <MrYumRobot {...{x:0, y:0, f:'EAST', place: false}}/>,
    currentDirection: 'NORTH',
    isPlaced: false
  }}/>);

  expect(getByText('Intialization')).toBeInTheDocument()
});

test('RobotContainer placed on the table', () => {
  render(<RobotContainer {...{
    name: 'Mr Yum',
    renderBot: <MrYumRobot {...{x:0, y:1, f:'EAST', place: true}}/>,
    currentDirection: 'NORTH',
    isPlaced: true
  }}/>);

  expect(screen.getByText('Coordinate start from 0 to 4')).toBeInTheDocument()
});

test('RobotContainer move forward the robot', () => {
  const moveHandler = jest.fn()
  render(<RobotContainer {...{
    name: 'Mr Yum',
    renderBot: <MrYumRobot {...{x:0, y:1, f:'EAST', place: true}}/>,
    currentDirection: 'NORTH',
    isPlaced: true
  }}/>);

  const handlerMove = jest.spyOn(React, 'useState')

  handlerMove.mockImplementation()

  expect(screen.getByText('Coordinate start from 0 to 4')).toBeInTheDocument()
});