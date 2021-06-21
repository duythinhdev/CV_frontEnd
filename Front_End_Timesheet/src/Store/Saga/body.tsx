import * as action from "../action";
import {put} from "redux-saga/effects";
import axios from "axios"

export function* fetchStatusHistory(): any {
    console.log("123123")
    const response = yield axios.get("http://127.0.0.1:8000/refresh/") as Promise<Array<Object>>;
    yield put(action.dataHistory(response.data));
}
