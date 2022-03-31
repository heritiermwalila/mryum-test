import { MrYumRobotProps } from "../Robot/MrYum"
import './Table.scss'

interface TableProps {
    children: JSX.Element[] | JSX.Element | React.FC
}
export const Table = ({children}: TableProps) => {
   
    return <div className="Table-Container">
        {children}
    </div>
}