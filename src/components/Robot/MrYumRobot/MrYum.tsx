import React from 'react'
import withError from '../../../HOC/withError';
import { DIRECTIONS } from '../../../lib/direction';
import { getRobot } from '../../../lib/getRobot';
import { Direction } from '../../../type';

export interface MrYumRobotProps {
    x: number;
    y: number;
    f: Direction;
    place: boolean;
}
const MrYumRobot = ({x, y, f, place}: MrYumRobotProps) => {

    React.useEffect(() => {
        if(place){
            if(!Number.isInteger(x) || !Number.isInteger(y)){
                throw new Error('x and y must be an integer')
            }
    
            if(!DIRECTIONS.includes(f)){
                throw new Error('Invalid robot position')
            }
        }
       
    }, [x, y, f, place])

    /**
     * Render the roboto position
     */
    const renderRobot = React.useCallback(() => {
        return <img src={getRobot(f)} alt={f} />
    }, [f])

    if(!place){
        return null
    }
    return <div className="Robot" style={{
        left: x + '%',
        top: y + '%'
    }}>
        {renderRobot()}
    </div>
}

export default withError(MrYumRobot)