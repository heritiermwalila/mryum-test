import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RobotMovementController, { RobotMovementControllerProps } from './RobotMovementController'


const props: RobotMovementControllerProps = {
    isPlaced: true,
    onTurnLeft: function() {},
    onTurnRight: function() {}

}

test('renders Robot Movement Controller', () => {
  const {getByText} = render(<RobotMovementController {...{...props}}/>);

  expect(getByText('Controls')).toBeInTheDocument()
  expect(getByText('Turn Left')).toBeInTheDocument()
});

test('It should click on left button', () => {
    render(<RobotMovementController {...{...props}}/>);
    fireEvent.click(screen.getByText('Turn Left'))
    fireEvent.click(screen.getByText('Turn Right'))
})
