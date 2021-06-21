import React from 'react';
import map from "../../assets/image/map.svg";
import "./Navigation.scss";
import NavigationHeader from "./NavigationHeader/NavigationHeader";
import NavigationBody from "./NavigationBody/NavigationBody";

interface Props {
    districts: [],
    routedatas: Array<Object>,
    ChangeTable: (name: string) => void;
}

const Navigation: React.FC<Props> = ({
                                         districts,
                                         routedatas, ChangeTable
}) => {
    return (
        <div className="admin-nav">
            <div className="nav--header">
                <div className="nav--header__Computer">
                    <span>Computer Vision</span>
                </div>
                <NavigationHeader
                    routedatass={routedatas} ChangeTables={ChangeTable}
                />
            </div>
            <div className="nav--body">
                <div className="nav--body__location">
                    <span>Locations</span>
                </div>
                <div className="nav--body__district">
                    <div className="nav--body__district--ward">
                        <NavigationBody
                            //district={districts}
                        />
                    </div>
                </div>
            </div>
            <div className="nav--footer">
                <div>
                    <img src={map}/>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Navigation);

