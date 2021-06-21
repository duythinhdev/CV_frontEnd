import React, {useEffect, useState} from 'react';
import {Tab} from "../BodyHomeBottom/constant";
import TabHomeBotton from "./TabHomeBotton/TabHomeBotton";
import NavHomeBottom from "./NavHomeBottom/NavHomeBottom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../Store/action/index";

interface Props {

}

const TabHistory = [
    {
        name: Tab.Timesheet
    },
    {
        name: Tab.HistoryLog
    }
]
const BodyHomeBottom: React.FC<Props> = ({}) => {
    let dispatch = useDispatch();
    let dataHistorys = useSelector((state: any) => state.bodyHome.dataHistory) as Array<Object>;
    let actionstatusHistory = actions.statusHistory();
    let actionsShowPopup = actions.isShowPopupHistory(true);
    const [loadTable, setLoadTable] = useState({} as {});

    useEffect(() => {
        setLoadTable({Tab});
        setInterval(() => {
            dispatch(actionstatusHistory)
            dispatch(actionsShowPopup)
        }, 4000);
    }, [])

    const handleTab = (name: any) => {
        setLoadTable(name)
    }

    return (
        <div className="body-admin__bottom">
            <div className="body-admin__bottom--center">
                <div className="title-History">
                    <NavHomeBottom handleTab={handleTab} TabHistory={TabHistory}/>
                </div>
                <div className="body-history">
                    <TabHomeBotton load={loadTable} history={dataHistorys}/>
                </div>
            </div>
        </div>
    );
}

export default BodyHomeBottom;
