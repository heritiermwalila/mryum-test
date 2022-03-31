import { IReport } from "../../type"

interface RobotReportProps {
    report?: IReport
}
export default function RobotReport({report}: RobotReportProps){

    if(!report) return null
    return <div>
    <table>
        <thead>
            <tr>
                <td>X POSITION</td>
                <td>Y POSITION</td>
                <td>DIRECTION</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{report?.x}</td>
                <td>{report?.y}</td>
                <td>{report?.direction}</td>
            </tr>
        </tbody>
    </table>
</div>
}