import React from 'react';
import {Tab} from "../constant";
import TableHistoryLog from "../TableHistoryLog/TableHistoryLog";
import TableTimeSheet from "../TableTimeSheet/TableTimeSheet";

interface Props {
    load: Object,
    history: Array<Object>,
}

const TabHomeBotton: React.FC<Props> = ({load, history, }) => {
    switch (load) {
        case Tab.HistoryLog:
            return <TableHistoryLog historyLogs={history}/>;
        default :
            return <TableTimeSheet history={history}/>;

    }
    return <></>
}

export default TabHomeBotton;
