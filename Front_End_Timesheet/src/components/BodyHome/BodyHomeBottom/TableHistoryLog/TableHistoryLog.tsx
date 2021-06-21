import React from 'react';

interface Props {
    historyLogs: Array<Object>,
}

const TableHistoryLog: React.FC<Props> = ({historyLogs}) => {
    return (
        <table>
            <tbody>
            {
                historyLogs && historyLogs.map((element: any, index: number) => {

                    return <tr key={index}>
                        <td>{element.name}</td>
                        <td>{element.time}</td>
                        <td>{element.status}</td>
                        <td>{element.status}</td>
                        <td>{element.status}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    );
}

export default TableHistoryLog;
