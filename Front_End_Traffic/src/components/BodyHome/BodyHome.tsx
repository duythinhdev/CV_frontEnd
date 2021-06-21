import React, {useEffect, useState} from "react";
import "./BodyHome.scss";
import imageTraffic from "../../assets/image/imageTraffic.png";
import BodyHomeTop from "./BodyHomeTop/BodyHomeTop";
import BodyHomeBottom from "./BodyHomeBotton/BodyHomeBottom";

const statusTraffic: Array<Object> = [
    {
        id: 1,
        NumberCar: "59C - 547.99",
        TypeCar: "Car",
        status: "Overspeed",
        image: imageTraffic,
    },
    {
        id: 2,
        NumberCar: "59C - 547.99",
        TypeCar: "Car",
        status: "Overspeed",
        image: imageTraffic,
    },
    {
        id: 3,
        NumberCar: "59C - 547.99",
        TypeCar: "Car",
        status: "Overspeed",
        image: imageTraffic,
    },
    {
        id: 4,
        NumberCar: "59C - 547.99",
        TypeCar: "Car",
        status: "Overspeed",
        image: imageTraffic,
    },
    {
        id: 5,
        NumberCar: "59C - 547.99",
        TypeCar: "Car",
        status: "Overspeed",
        image: imageTraffic,
    },
    {
        id: 6,
        NumberCar: "59C - 547.99",
        TypeCar: "Car",
        status: "Overspeed",
        image: imageTraffic,
    },
    {
        id: 7,
        NumberCar: "59C - 547.99",
        TypeCar: "Car",
        status: "Overspeed",
        image: imageTraffic,
    },
]
const BodyHome = () => {
    const [tableTraffic, setTableTraffic] = useState([] as [])
    useEffect(() => {
        setTableTraffic(statusTraffic as []);
    }, [])
    return (
        <div className="admin-body">
            <BodyHomeTop/>
            <BodyHomeBottom tableTraffic={tableTraffic}/>
        </div>
    )
}
export default BodyHome;
