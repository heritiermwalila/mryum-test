import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DirectionList, { DirectionListProps } from '.'
import { DIRECTIONS } from '../../lib/direction';

const props: DirectionListProps = {
    currentDirection: 'WEST',
    directions: DIRECTIONS,
    onChangeDirection: jest.fn(value => {}),

}

test('Render direction list select', () => {
    render(<DirectionList {...{...props}}/>)
})