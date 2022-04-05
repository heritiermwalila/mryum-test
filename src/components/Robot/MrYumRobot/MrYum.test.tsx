import { render } from '@testing-library/react';
import React from 'react';
import { MrYumRobot } from '..';

test('renders Mr Yum Robot', () => {
  render(<MrYumRobot {...{x:0, y:80, f: 'NORTH', place: true}}/>);
});
