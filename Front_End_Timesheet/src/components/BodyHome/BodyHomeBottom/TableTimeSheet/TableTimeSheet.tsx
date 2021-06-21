import React, {useEffect, useState} from 'react';
import * as action from "../../../../Store/action/index";
import {useDispatch} from "react-redux";
interface Props {
    history: Array<Object>,
}

const TableTimeSheet: React.FC<Props> = ({history}) => {

    return (
        <React.Fragment>
            <table>
                <tbody>
                {
                    history && history.map((element: any, index: number) => {
                        //console.log("dataChildren",dataChildren)
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.department}</td>
                            <td>{element.fullname}</td>
                            <td>{element.gender}</td>
                            <td>{element.staffcode}</td>
                            <td>{element.status}</td>
                            <td>{element.time}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default TableTimeSheet;
