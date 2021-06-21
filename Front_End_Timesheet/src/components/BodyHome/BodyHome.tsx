import React, { lazy, useEffect, useState } from 'react';
import "./BodyHome.scss";
import request from 'request'
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Store/action";

var a:any = [];
const BodyHomeTop = lazy(() => import("../../components/BodyHome/BodyHomeTop/BodyHomeTop"))
const BodyHomeBottom = lazy(() => import("../../components/BodyHome/BodyHomeBottom/BodyHomeBottom"))

// const historys: Array<Object> = [
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
//     {
//         Department: "FDS.AI",
//         FullName: "Phan Minh Tri",
//         Gender: "Man",
//         Staff_code: "1410417",
//         time: "04/05/2021, 09:19:42"
//     },
// ]

const BodyHome = () => {
    //
    // const [historys, setHistory] = useState([]);
    // const [audio] = useState(new Audio("../../assets/audio/thanks"));
    // const [playing, setPlaying] = useState(false);
    //
    // const toggle = () => setPlaying(!playing);
    // useEffect(() => {
    //     playing ? audio.play() : audio.pause();
    //   },
    //   [playing]
    // );
    //
    //
    // useEffect(() => {
    //     setInterval(function(){
    //         apiCall();
    //     }, 3000);
    // })
    // function apiCall() {
    //     axios.get("http://127.0.0.1:8000/refresh/").then((res: any) =>{
    //         a.push(res.data[0]);
    //         setHistory(a)
    //     })
    // }

    return (
        <>
            <div className="body-admin">
                <BodyHomeTop />
                <BodyHomeBottom />
            </div>
        </>
    );
}
export default BodyHome;
