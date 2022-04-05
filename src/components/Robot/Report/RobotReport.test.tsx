import React from 'react';
import { render, screen } from '@testing-library/react';
import { IReport } from '../../../type';
import RobotReport from './RobotReport'


interface RobotReportProps {
    report: IReport
}
const props: IReport = {
    x: 1,
    y: 3,
    direction: 'EAST'
}

test('renders Robot Report', () => {
  const {getByText} = render(<RobotReport {...{report: props}}/>);
  expect(getByText(1)).toBeInTheDocument()
  expect(getByText('3')).toBeInTheDocument()
  expect(getByText('EAST')).toBeInTheDocument()
});
