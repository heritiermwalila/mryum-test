import React from 'react'
import { getRobot } from '../../lib/getRobot';
import { Direction } from '../../type';




export interface MrYumRobotProps {
    x: number;
    y: number;
    f: Direction;
    place: boolean;
}
export const MrYumRobot = ({x, y, f, place}: MrYumRobotProps) => {

    React.useEffect(() => {
       console.log("X->", x, "Y->", y, "Direction ->", f);
       

    }, [x, y, f])

    const renderRobot = React.useCallback(() => {
        return <img src={getRobot(f)} alt="North direction" />
    }, [f, place])

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