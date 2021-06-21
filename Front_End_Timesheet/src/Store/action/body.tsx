import * as actionTypes from "../action/actiontype";

export const statusVideoStream = (isLoadVideo: boolean) => {
    return {
        type:  actionTypes.BODY_LOAD_VIDEO,
        isLoadVideos: isLoadVideo
    }
}
export const statusHistory = () => {
    return {
        type:  actionTypes.FETCH_STATUS_HISTORY
    }
}
export const dataHistory = (data: Array<Object>) => {
    return {
        type:  actionTypes.DATA_STATUS_HISTORY,
        dataHistory:data
    }
}
export const isShowPopupHistory = (isShow: boolean) => {
    return {
        type: actionTypes.IS_SHOW_POPUP_HISTORY,
        isShow: isShow
    }
}

