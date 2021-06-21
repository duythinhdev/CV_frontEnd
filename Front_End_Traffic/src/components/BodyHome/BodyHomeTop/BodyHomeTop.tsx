import React from 'react';
import "./BodyHomeTop.scss";
import cam1 from "../../../assets/image/cam1.svg";
import cam2 from "../../../assets/image/cam2.svg";

const BodyHomeTop = () => {
    return (
        <div className="admin-body--top">
            <div className="admin-body--top__left">
                <img src={cam1} width="100%" height="100%"  />
            </div>
            <div className="admin-body--top__right">
                <img src={cam2}  width="100%" height="100%" />
            </div>
        </div>
    );
}

export default BodyHomeTop;
