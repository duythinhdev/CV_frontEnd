import React, {useEffect} from 'react';
const JSMpeg = require('@cycjimmy/jsmpeg-player');
const Camera = () =>{
    useEffect(()=>{
        var videoUrl = 'ws://localhost:9999/';
        var player = new JSMpeg.VideoElement('#video-canvas', videoUrl, { autoplay: true });
        console.log(player);
    })
    return (
        <div id="video-canvas" style={
            { height: '1080px', width: '1920px' } }>

        </div>
    );
}

export default Camera;
