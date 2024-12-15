import {take, call, put, fork} from "redux-saga/effects"
import entriesActionTypes from "../actions/entries.actions";
import axios from "axios";


export function* deleteEntriesSaga() {
    while (true) {
        const {payload} = yield take(entriesActionTypes.REMOVE_ENTRY)
        yield call(deleteEntry, payload.id, "entries")
        yield fork(deleteEntry, payload.id, "values")
        yield put({type: entriesActionTypes.REMOVE_ENTRY_RESULT, payload: {id: payload.id}})
    }
}


async function deleteEntry(id, endpoint) {
    await axios.delete(`http://localhost:3001/${endpoint}/${id}`)
}