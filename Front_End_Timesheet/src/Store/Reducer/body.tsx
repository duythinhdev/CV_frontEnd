import * as actionTypes from "../action/actiontype";
import {updateobject} from "../utility";


interface tsInitialState {
    isLoadVideo: boolean,
    dataHistory: Array<Object>,
    isShowPopup: boolean,
    childrenDataHistory: Object
}

const initialState: tsInitialState = {
    isLoadVideo: true,
    dataHistory: [],
    isShowPopup: false,
    childrenDataHistory: {}
}
const bodyLoadVideo = (action: any, state: any) => {
    return updateobject(state, {isLoadVideo: action.isLoadVideos});
}
const dataHistory = (action: any, state: any) => {
    console.log("dataHistory", state.dataHistory, state.childrenDataHistory)
    return updateobject(state, {
        dataHistory: [...action.dataHistory, ...state.dataHistory],
        childrenDataHistory: action.dataHistory[0]
    });
}
const showPopupHistory = (action: any, state: any) => {
    return updateobject(state, {isShowPopup: action.isShow})
}
const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.BODY_LOAD_VIDEO:
            return bodyLoadVideo(action, state);
        case actionTypes.DATA_STATUS_HISTORY:
            return dataHistory(action, state);
        case actionTypes.IS_SHOW_POPUP_HISTORY:
            return showPopupHistory(action, state)
        default:
            return state;
    }
}
export default Reducer;
