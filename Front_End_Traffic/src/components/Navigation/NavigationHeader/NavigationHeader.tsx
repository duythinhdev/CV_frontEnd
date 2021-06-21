import React from 'react';
import "./NavigationHeader.scss";
import Home from "../../../assets/image/Menu.png";
import Setting from "../../../assets/image/setting.png";
import { Link } from "react-router-dom";
interface Props {
    routedatass: Array<Object>,
    ChangeTables: (name: string) => void;
}

const NavigationHeader: React.FC<Props> = ({
                                               routedatass, ChangeTables
}) => {
    // var home = document.getElementsByClassName("nav--header__Home") as HTMLCollectionOf<HTMLElement>;
    // useEffect(()=>{
    //     var i;
    //     for (i = 0; i < home.length; i++) {
    //         home[0].style.borderLeft = "";
    //         home[0].style.cursor = "pointer";
    //         home[0].style.background = "";
    //     }
    // },[home])
    return (
        <div>
            {
                routedatass && routedatass.map((item: any, index: number) => {
                    return <div className="nav--header__Home" key={index} onClick={() => ChangeTables(item.name)}>
                        <div className="nav--header__Home--img">
                            <img src={item.icon} className="icon"/>
                        </div>
                        <div className="nav--header__Home--Text">
                            <span>{item.name}</span>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default NavigationHeader;
