import React, {useEffect, useState} from 'react';
import Up from "../../../assets/image/iconUp.svg";
import Down from "../../../assets/image/iconDown.svg";

interface Props {
    Tabname: Array<Object>,
    handleTab: (name: string) => void;
}

const NavigationBody: React.FC<Props> = ({Tabname, handleTab}) => {
    const [isShowValueFace, setIsShowValueFace] = useState(false as boolean);
    const [isShowValueBody, setIsShowValueBody] = useState(false as boolean);
    const [isShowValueAlarm, setIsShowValueAlarm] = useState(false as boolean);
    useEffect((): void => {
        setIsShowValueFace(false);
        setIsShowValueBody(false);
        setIsShowValueAlarm(false);
    }, [])
    const clickFace = (): void => {
        setIsShowValueFace(true);
    }
    const ClickFaceFalse = (): void => {
        setIsShowValueFace(false);
        handleTab('');
    }
    const clickBody = ():void =>{
        setIsShowValueBody(true);
    }
    const ClickBodyFalse = ():void =>{
        setIsShowValueBody(false);
        handleTab('');
    }
    const clickAlarm = ():void =>{
        setIsShowValueAlarm(true);
    }
    const ClickAlarmFalse = ():void =>{
        setIsShowValueAlarm(false);
        handleTab('');
    }
    const clickBorder = (name: string, index: number) => {
        let border = document.getElementsByClassName("nav-adminbody__Tab") as HTMLCollectionOf<HTMLElement>;
        if (index === 0) {
            tabDashBoard(border)
        } else if (index === 1) {
            tabSmart(border)
        } else if (index === 2) {
            tabContacts(border)
        } else if (index === 3) {
            tabSetting(border)
        }
        handleTab(name)
    }
    const tabDashBoard = (border: any) => {
        border[0].style.borderLeft = "4px solid #4490FF";
        border[0].style.cursor = "pointer";
        border[0].style.background = "#2A394F";
        border[1].style.borderLeft = "";
        border[1].style.cursor = "";
        border[1].style.background = "";
        border[2].style.borderLeft = "";
        border[2].style.cursor = "";
        border[2].style.background = "";
        border[3].style.borderLeft = "";
        border[3].style.cursor = "";
        border[3].style.background = "";
    }
    const tabSmart = (border: any) => {
        border[0].style.borderLeft = "";
        border[0].style.cursor = "";
        border[0].style.background = "";
        border[1].style.borderLeft = "4px solid #4490FF";
        border[1].style.cursor = "pointer";
        border[1].style.background = "#2A394F";
        border[2].style.borderLeft = "";
        border[2].style.cursor = "";
        border[2].style.background = "";
        border[3].style.borderLeft = "";
        border[3].style.cursor = "";
        border[3].style.background = "";
    }
    const tabContacts = (border: any) => {
        border[0].style.borderLeft = "";
        border[0].style.cursor = "";
        border[0].style.background = "";
        border[1].style.borderLeft = "";
        border[1].style.cursor = "";
        border[1].style.background = "";
        border[2].style.borderLeft = "4px solid #4490FF";
        border[2].style.cursor = "pointer";
        border[2].style.background = "#2A394F";
        border[3].style.borderLeft = "";
        border[3].style.cursor = "";
        border[3].style.background = "";
    }
    const tabSetting = (border: any) => {
        border[0].style.borderLeft = "";
        border[0].style.cursor = "";
        border[0].style.background = "";
        border[1].style.borderLeft = "";
        border[1].style.cursor = "";
        border[1].style.background = "";
        border[2].style.borderLeft = "";
        border[2].style.cursor = "";
        border[2].style.background = "";
        border[3].style.borderLeft = "4px solid #4490FF";
        border[3].style.cursor = "pointer";
        border[3].style.background = "#2A394F";
    }
    return (
        <>
            {
                isShowValueFace === false ?
                    <div className="nav-adminbody__Main" onClick={() => clickFace()}>
                        <span>Timesheet</span>
                        {isShowValueFace === false && <img src={Up}/>}
                    </div> :
                    <div className="nav-adminbody__Main" onClick={() => ClickFaceFalse()}>
                        <span>Timesheet </span>
                        {isShowValueFace === true && <img src={Down}/>}
                    </div>
            }
            {
                isShowValueFace === true &&
                <>
                    {
                        Tabname && Tabname.map((item: any, index: number) => {
                            return <div className="nav-adminbody__Tab" key={index}
                                        onClick={() => clickBorder(item.Name, index)}>
                                <div className="nav-adminbody__Tab-img">
                                    <img src={item.icon}/>
                                </div>
                                <div className="nav-adminbody__Tab-Text">
                                    <span>{item.Name}</span>
                                </div>
                            </div>
                        })
                    }
                </>
            }
            {
                isShowValueBody === false ?
                    <div className="nav-adminbody__Main" onClick={() => clickBody()}>
                        <span>Control</span>
                        {isShowValueBody === false && <img src={Up}/>}
                    </div> :
                    <div className="nav-adminbody__Main" onClick={() => ClickBodyFalse()}>
                        <span>Control </span>
                        {isShowValueBody === true && <img src={Down}/>}
                    </div>
            }
            {
                isShowValueBody === true &&
                <>
                    {
                        Tabname && Tabname.map((item: any, index: number) => {
                            return <div className="nav-adminbody__Tab" key={index} onClick={() => clickBorder(item.Name, index)}>
                                <div className="nav-adminbody__Tab-img">
                                    <img src={item.icon}/>
                                </div>
                                <div className="nav-adminbody__Tab-Text">
                                    <span>{item.Name}</span>
                                </div>
                            </div>
                        })
                    }</>
            }
            {
                isShowValueAlarm === false ?
                    <div className="nav-adminbody__Main" onClick={() => clickAlarm()}>
                        <span>Alarm</span>
                        {isShowValueAlarm === false && <img src={Up}/>}
                    </div> :
                    <div className="nav-adminbody__Main" onClick={() => ClickAlarmFalse()}>
                        <span>Alarm </span>
                        {isShowValueAlarm === true && <img src={Down}/>}
                    </div>
            }
            {
                isShowValueAlarm === true &&
                <>
                    {
                        Tabname && Tabname.map((item: any, index: number) => {
                            return <div className="nav-adminbody__Tab" key={index} onClick={() => clickBorder(item.Name, index)}>
                                <div className="nav-adminbody__Tab-img">
                                    <img src={item.icon}/>
                                </div>
                                <div className="nav-adminbody__Tab-Text">
                                    <span>{item.Name}</span>
                                </div>
                            </div>
                        })
                    }</>
            }
        </>
    );
}

export default NavigationBody;
