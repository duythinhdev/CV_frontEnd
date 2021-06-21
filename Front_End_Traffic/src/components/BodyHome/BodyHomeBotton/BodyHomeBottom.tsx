import React, {useEffect, useState} from 'react';
import "./BodyHomeBotton.scss"
import Chart from "../../../assets/image/chart.png";
import {ChartPoint} from "../constant";
import BodyHomeBottonRight from "../BodyHomeBottonRight/BodyHomeBottonRight";

interface Props {
    tableTraffic: Array<Object>,
}

const chart = [
    {
        name: ChartPoint.Day,
    },
    {
        name: ChartPoint.Week,
    },
    {
        name: ChartPoint.Month,
    },
    {
        name: ChartPoint.Year,
    }
]
const BodyHomeBottom: React.FC<Props> = ({tableTraffic}) => {
    const [switchNameChart, setSwitchNameChart] = useState({} as Object)
    useEffect(() => {
        setSwitchNameChart({ChartPoint})
    }, [])
    const changeChart = (name: string) => {
        setSwitchNameChart(name);
    }
    return (
        <div className="admin-body--bottom">
            <div className="admin-body--bottom__left">
                <div>
                    <span>Reports List</span>
                </div>
                <table>
                    <tbody>
                    {
                        tableTraffic && tableTraffic.map((item: any, index: number) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.NumberCar}</td>
                                <td>{item.TypeCar}</td>
                                <td>{item.status}</td>
                                <td><img src={item.image}/></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="admin-body--bottom__right">
                <div className="title-sumary">
                    <span>Summary</span>
                </div>
                <div className="cotainer-sumary">
                    <div className="cotainer-sumary__chart">
                        <BodyHomeBottonRight switchNameChart={switchNameChart}/>
                    </div>
                    <div className="cotainer-sumary__button">
                        {
                            chart && chart.map((item: any, index: number) => {
                                return <button key={index} onClick={() => changeChart(item.name)}>{item.name}</button>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyHomeBottom;
