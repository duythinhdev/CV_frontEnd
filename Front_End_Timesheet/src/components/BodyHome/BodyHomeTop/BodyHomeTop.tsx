import React, {useEffect} from 'react';
import BodyHomeTopLeft from "./BodyHomeTopLeft/BodyHomeTopLeft";
import BodyHomeTopRight from "./BodyHomeTopRight/BodyHomeTopRight";
import axios from "axios";
const BodyHomeTop = () => {
    return (
        <div className="body-admin__top">
            <BodyHomeTopLeft />
            <BodyHomeTopRight />
        </div>
    );
}

export default BodyHomeTop;
