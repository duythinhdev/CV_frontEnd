import React, {useEffect, useState} from 'react';
import './containerAdmin.scss';

import Home from "../../assets/image/Menu.png";
import Setting from "../../assets/image/setting.png";

import {tabName} from "../Admin/constant";
import Navigation from "../Navigation/Navigation";
import Body from "../Body/Body";

const districtss: any = [
    {
        districts: "district 1",
        wards: [
            {
                ward: "an phu1"
            },
            {
                ward: "phu dong"
            },
            {
                ward: "phu loi"
            },
            {
                ward: "mai chi tho"
            },
        ]
    },
    {
        districts: "district 2",
        wards: [
            {
                ward: "an phu loi 2"
            },
            {
                ward: "an phu thanh loi"
            },
            {
                ward: "an phu thanh tinh"
            },
            {
                ward: "an phu thanh dong"
            },
        ]
    },
    {
        districts: "district 3",
        wards: [
            {
                ward: "an phu 3"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 4",
        wards: [
            {
                ward: "an phu 4"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 5",
        wards: [
            {
                ward: "an phu 5"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 6",
        wards: [
            {
                ward: "an phu 6"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 7",
        wards: [
            {
                ward: "an phu 7"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 7",
        wards: [
            {
                ward: "an phu 8"
            },
            {
                ward: "phu dong"
            },
            {
                ward: "dong an"
            },
            {
                ward: "dong xuan"
            },
        ]
    },
    {
        districts: "district 8",
        wards: [
            {
                ward: "phu 8"
            },
            {
                ward: "dong an"
            },
            {
                ward: "dong xuan"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 9",
        wards: [
            {
                ward: "dong xuan`9"
            },
            {
                ward: "dong an"
            },
            {
                ward: "dong xuan"
            },
            {
                ward: "an phu"
            },
        ]
    },
    {
        districts: "district 10",
        wards: [
            {
                ward: "dong 10"
            },
            {
                ward: "an loi"
            },
            {
                ward: "xuan thu"
            },
            {
                ward: "an phu"
            },
        ]
    },
]
const routeData: Array<object> = [
    {
        name: tabName.Home,
        icon: Home,
    },
    {
        name: tabName.Setting,
        icon: Setting,
    },
]

const ContainerAdmin: React.FC = () => {
    const [district, setDistrict] = useState([] as []);
    const [tab, setTab] = useState({} as Object);
    useEffect(() => {
        setDistrict(districtss);
        setTab({tabName})
    }, [])
    const ChangeTable = (name: string) => {
        localStorage.setItem("Tab", name);
        setTab(name);
    }
    return (
        <div className="background-admin">
            <Navigation districts={district}
                        routedatas={routeData}
                        ChangeTable={ChangeTable}
            />
            <Body tab={tab}/>
        </div>
    );
}

export default React.memo(ContainerAdmin);
