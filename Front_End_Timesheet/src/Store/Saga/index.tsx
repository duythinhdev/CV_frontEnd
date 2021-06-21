import {takeEvery, all} from "redux-saga/effects";
import * as actionTypes from "../../Store/action/actiontype";
import {fetchStatusHistory} from "../Saga/body";

export function* bodyHome() {
    yield all(
        [takeEvery(actionTypes.FETCH_STATUS_HISTORY, fetchStatusHistory)]
    );
}
