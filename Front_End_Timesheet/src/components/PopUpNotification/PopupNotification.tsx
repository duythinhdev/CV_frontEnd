import React, {useState} from 'react';
import "../PopUpNotification/PopupNotification.scss";
import Close from "../../assets/image/xnxx1.png";
import avatar from "../../assets/image/person.png";
import checkin from "../../assets/image/checked40.png";
import {useSelector} from "react-redux";
import * as action from "../../Store/action/index";
import {useDispatch} from "react-redux";

const PopupNotification = () => {
    let loadPopup = useSelector((state: any) => state.bodyHome.isShowPopup) as boolean;
    const dataChildrenHistory = useSelector((state: any) => state.bodyHome.childrenDataHistory);
    let dispatch = useDispatch();
    const clickHidePopUp = () => {
        let actionsShowPopup = action.isShowPopupHistory(false);
        dispatch(actionsShowPopup);
    }
    return (
        <>
            {
                loadPopup && <div className="popup-container" onClick={() => clickHidePopUp()}>
                    <img src={Close} className="popup-children--imgclose" onClick={() => clickHidePopUp()}/>
                    <div className="popup-children">
                        <div className="popup-children__avatar">
                            <img src={avatar} className="popup-children__avatar--1"/>
                            <img src={checkin} className="popup-children__avatar--2"/>
                        </div>
                        <div className="popup-children__name">
                            <span>Hello {dataChildrenHistory.fullname}</span>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default PopupNotification;
