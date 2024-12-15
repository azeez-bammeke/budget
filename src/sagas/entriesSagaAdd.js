import {takeLatest, call, put} from "redux-saga/effects"
import entriesActionTypes, {addEntryAction, addEntryResultAction} from "../actions/entries.actions";
import axios from "axios";


export function* addEntrySaga() {
    yield takeLatest(entriesActionTypes.ADD_ENTRY, addEntryToDb)
}


function* addEntryToDb({payload}) {
    yield call(addEntry, payload)
    yield call(addEntryDetails, payload)
    yield put(addEntryResultAction(payload))
}

async function addEntry({id, description}) {
    await axios.post(`http://localhost:3001/entries`, {id, description})
}

async function addEntryDetails({id, value, isExpense}) {
    await axios.post(`http://localhost:3001/values`, {id, value, isExpense})
}