import React from 'react';
import { render, screen } from '@testing-library/react';
import {MrYumRobot} from './MrYum';

test('renders Mr Yum Robot', () => {
  render(<MrYumRobot {...{x:0, y:80, f: 'NORTH', place: true}}/>);
});
