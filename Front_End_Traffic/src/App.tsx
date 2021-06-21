import React from 'react';
import './App.scss';
import Camera from "./components/Camera/camera";
import {Switch, Route,BrowserRouter} from "react-router-dom";
import ContainerAdmin from "../src/components/Admin/containerAdmin";
import Home from "../src/components/BodyHome/BodyHome";
import BodySetting from "./components/BodySetting/BodySetting";
import Navigation from "./components/Navigation/Navigation";

const App: React.FC = () => {
    let router =
        (
            <BrowserRouter>
                <Switch>
                    <Route path="/admin/dashboard" component={ContainerAdmin}/>
                    <Route path="/camera" component={Camera}/>
                </Switch>
            </BrowserRouter>
        );
    return (
        <>
            <div>
            {router}
            </div>
        </>
    );
}

export default App;
