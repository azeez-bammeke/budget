import {take, call, put, fork} from "redux-saga/effects"
import entriesActionTypes, {populateEntriesAction, populateEntryValuesAction} from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
    yield take(entriesActionTypes.GET_ENTRIES)
    const response = yield call(axios, "http://localhost:3001/entries")
    yield put(populateEntriesAction(response.data))
}

export function* getEntryDetails(id) {
   if(id) {
       const {data} = yield call(axios, `http://localhost:3001/values/${id}`)
       yield put(populateEntryValuesAction(id, data))
   }
}

export function* getAllEntriesDetails() {
    const {payload} = yield take(entriesActionTypes.POPULATE_ENTRIES)
   for (let index =0; index < payload.length; index++) {
       const entry = payload[index]
       yield fork(getEntryDetails, entry.id)
   }
}