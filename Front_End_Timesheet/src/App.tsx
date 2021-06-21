import React, {lazy, Suspense} from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Popup from "../src/components/PopUpNotification/PopupNotification";
const admin = lazy(() => import("../src/components/admin/admin"));


const App = () => {
    let route = (
        <BrowserRouter>
            <Suspense fallback={<div>Page is Loading...</div>}>
                <Switch>
                    <Route path="/admin" component={admin}/>
                    <Route path="/popup" component={Popup}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
    return (
        <div>
            {route}
        </div>
    );
}

export default App;
