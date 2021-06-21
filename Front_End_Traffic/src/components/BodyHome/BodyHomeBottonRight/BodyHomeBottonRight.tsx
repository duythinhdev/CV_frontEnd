import React from 'react';
import {ChartPoint} from "../constant";
import BodyChartDay from "../BodyChartDay/BodyChartDay";
import BodyChartWeek from "../BodyChartWeek/BodyChartWeek";
import BodyChartMonth from "../BodyHomeChartMonth/BodyChartMonth";
import BodyChartYear from "../BodyHomeChartYear/BodyChartYear";

interface Props {
    switchNameChart?: Object
}

const BodyHomeBottonRight: React.FC<Props> = ({switchNameChart}) => {

    switch (switchNameChart) {
        // case ChartPoint.Day:
        //     return <BodyChartDay />
        case ChartPoint.Week:
            return <BodyChartWeek/>
        case ChartPoint.Month:
            return <BodyChartMonth/>
        case ChartPoint.Year:
            return <BodyChartYear/>
        default:
            return <BodyChartDay/>
    }
}

export default BodyHomeBottonRight;
