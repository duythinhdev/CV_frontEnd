import React, {useEffect, useState} from 'react';
import fdslogo from "../../assets/image/fds_logo.jpg";
import "./Navigation.scss";
import NavigationBody from "./NavigationBody/NavigationBody";
import Account from "../../assets/image/account.png";
import Up from "../../assets/image/iconUp.svg";
import Down from "../../assets/image/iconDown.svg";

interface Props {
    Tabname: Array<Object>,
    handleTab: (name: string) => void;
}

const account = [
    {
        name: "FDS.AI Team",
        icon: Account
    },
    {
        name: "ABC.Company",
        icon: Account
    }
]
const Navigation: React.FC<Props> = ({Tabname, handleTab}) => {
    const [clickAccount, setClickAccount] = useState(false as boolean);
    const clickShowTrue = (): void => {
        setClickAccount(true)
    }
    const clickShowFalse = (): void => {
        setClickAccount(false)
    }
    return (
        <>
            <div className="nav-admin">
                <div className="nav-adminHeader">
                    <div className="nav-adminHeader__logo">
                        <img src={fdslogo}/>
                    </div>
                    <div className="nav-adminHeader__faceName">
                        <span> Smart Receiption</span>
                    </div>
                </div>
                <div className="nav-adminbody">
                    <NavigationBody Tabname={Tabname} handleTab={handleTab}/>
                </div>
                <div className="nav-adminFooter">
                    {
                        clickAccount === false ? <div className="nav-adminFooter__Name" onClick={() => clickShowTrue()}>
                            <span>Account</span>
                            {clickAccount === false && <img src={Up} className="nav-adminFooter__Name--img"/>}
                        </div> : <div className="nav-adminFooter__Name" onClick={() => clickShowFalse()}>
                            <span>Account</span>
                            {clickAccount === true && <img src={Down} className="nav-adminFooter__Name--img"/>}
                        </div>
                    }
                    {
                        clickAccount === true && <>
                            {
                                account && account.map((item: any, index: number) => {
                                    return <div key={index} className="nav-adminFooter__account">
                                        <div className="nav-adminFooter__account--img">
                                            <img src={item.icon}/>
                                        </div>
                                        <div className="nav-adminFooter__account--span">
                                            <span>{item.name}</span>
                                        </div>
                                    </div>
                                })
                            }</>
                    }
                </div>
            </div>
        </>
    );
}

export default Navigation;
