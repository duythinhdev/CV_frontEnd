import React from "react";
import {tabName} from "../Admin/constant";
import BodyHome from "../../components/BodyHome/BodyHome";
import BodySetting from "../../components/BodySetting/BodySetting";

interface Props{
    tab:Object,
}
const Body:React.FC<Props> = ({tab}) =>{
    switch (tab)
    {
        // case tabName.Home:
        //     return <BodyHome />;
        case tabName.Setting:
            return <BodySetting />
        default :
            return <BodyHome />;
    }
}
export default Body;
