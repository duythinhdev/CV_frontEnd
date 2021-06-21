import React, {lazy} from 'react';
import {TabName} from "../admin/constantNavigation";
import "../BodyHome/BodyHome"

const BodyHome = lazy(() => import("../BodyHome/BodyHome"))
const BodyTimeSheet = lazy(() => import("../BodyTimeSheet/BodyTimeSheet"))

interface Props {
    tab: Object
}

const Body: React.FC<Props> = ({tab}) => {
    switch (tab) {
        case TabName.face.SmartTimeSheet:
            return <BodyTimeSheet/>;
        case TabName.face.DashBoard:
            return <BodyHome/>;
    }
    return <></>;
}

export default Body;
