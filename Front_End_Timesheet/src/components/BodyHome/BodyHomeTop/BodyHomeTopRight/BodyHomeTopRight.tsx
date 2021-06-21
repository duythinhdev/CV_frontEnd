import React from 'react';
import {useDispatch} from "react-redux";

const action = require("../../../../Store/action");
const buttonStarStop: Array<Object> = [
    {
        name: "Start"
    },
    {
        name: "Stop"
    },
]
const BodyHomeTopRight = () => {
    const dispatch = useDispatch();
    let button = document.getElementsByClassName("button__start--stop") as HTMLCollectionOf<HTMLElement>;
    const clickButton = (index: number) => {
        if (index === 0) {
            buttonStart();
        } else if (index === 1) {
            buttonStop();
        }
    }
    const buttonStart = () => {
        let actions = action.statusVideoStream(true);
        dispatch(actions)
        button[0].style.background = "#4490FF";
        button[0].style.color = "#FFFFFF";
        button[1].style.background = "";
        button[1].style.color = "";
    }
    const buttonStop = () => {
        let actions = action.statusVideoStream(false);
        dispatch(actions)
        button[1].style.background = "#4490FF";
        button[1].style.color = "#FFFFFF";
        button[0].style.background = "";
        button[0].style.color = "";
    }


    return (
        <div className="body-admin__top--right">
            <div className="body-admin__top--rightchild">
                <div className="body-admin__top--title">
                                <span>
                                    Information
                                </span>
                </div>
                <div className="body-admin__top--container">
                    <div className="admin__top--children">
                        <div className="children__NameGender">
                            <div className="children__NameGender--1">
                                <span>Name</span>
                                <input type="text" placeholder="Ho Quang Phap"/>
                            </div>
                            <div className="children__NameGender--2">
                                <span>Gender</span>
                                <input type="text" placeholder="Male"/>
                            </div>
                        </div>
                        <div className="children__hr">
                            <hr/>
                        </div>
                        <div className="children__staffcode">
                            <div className="children__staffcode--1">
                                <span>Staff Code</span>
                                <input type="text" placeholder="Staff Code"/>
                            </div>
                        </div>
                        <div className="children__department">
                            <div className="children__department--1">
                                <span>Department</span>
                                <input type="text" placeholder="Department"/>
                            </div>
                        </div>
                    </div>
                    <div className="admin__top--button">
                        {
                            buttonStarStop && buttonStarStop.map((item: any, index: number) => {
                                return <button className="button__start--stop" key={index}
                                               onClick={() => clickButton(index)}>
                                    {item.name}
                                </button>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyHomeTopRight;
