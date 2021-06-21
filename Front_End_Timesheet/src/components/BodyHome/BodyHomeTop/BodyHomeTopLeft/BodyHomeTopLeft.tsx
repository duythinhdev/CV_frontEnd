import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
const axios = require("axios");
function BodyHomeTopLeft() {
    let showVideo = useSelector((state:any) =>state.bodyHome.isLoadVideo as boolean);
    let urlFectch = "http://127.0.0.1:8000/video_feed/";
    let urlStop = "http://127.0.0.1:8000/stop/";
    return (
        <div className="body-admin__top--left">
            <div className="body-admin__top--leftchild">
                <div className="title-camera">
                                <span>
                                    Camera
                                </span>
                </div>
                <div className="video-canvas">
                    {/*{hideShowVideo}*/}
                    { showVideo && <img src={showVideo ? urlFectch : urlStop} />   }
                </div>
            </div>
        </div>
    );
}

export default BodyHomeTopLeft;
