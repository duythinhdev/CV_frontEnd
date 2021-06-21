import React, {useEffect, useState} from 'react';
import "./admin.scss";
import Menu from "../../assets/image/Menu.png";
import {TabName} from "./constantNavigation";
import Setting from "../../assets/image/setting.png";
import Contacts from "../../assets/image/contacts.png";
import Navigation from "../Navigation/Navigation";
import Body from "../body/Body";
import Smart from "../../assets/image/smart.png";
import {useSelector} from "react-redux";
import PopupNotification from "../PopUpNotification/PopupNotification";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TabNames = [
    {
        Name: TabName.face.DashBoard,
        icon: Menu
    },
    {
        Name: TabName.face.SmartTimeSheet,
        icon: Smart
    },
    {
        Name: TabName.face.Contact,
        icon: Contacts
    },
    {
        Name: TabName.face.Setting,
        icon: Setting
    }
]
const Tabbody = [
    {
        Name: TabName.face.DashBoard,
        icon: Menu
    },
    {
        Name: TabName.face.SmartTimeSheet,
        icon: Smart
    },
    {
        Name: TabName.face.Contact,
        icon: Contacts
    },
    {
        Name: TabName.face.Setting,
        icon: Setting
    }
]
const Admin: React.FC = () => {
    const [nameTitle, setNameTitle] = useState({} as Object);
    let loadPopup = useSelector((state:any) => state.bodyHome.isShowPopup) as boolean ;
    let dataHistoryChildren = useSelector((state:any)=> state.bodyHome.childrenDataHistory);
    let notify = () => {
        toast(dataHistoryChildren.fullname  === undefined ? "Chưa Xác Định " : `Hello` + ` ` +  dataHistoryChildren.fullname)
    };
    useEffect(() => {
        setNameTitle({TabName})
        setInterval(()=>{
            notify();
        },3000)
    }, [])
    const HandleClick = (name: string): void => {
        setNameTitle(name)
    }
    return (
        <>
            <div className="background-admin" onLoad={()=>notify()} >
                <Navigation Tabname={TabNames} handleTab={HandleClick}/>
                <Body tab={nameTitle}/>
                {loadPopup && <PopupNotification /> }
                {
                    dataHistoryChildren  && <ToastContainer />
                }
            </div>
        </>
    );
}

export default Admin;
