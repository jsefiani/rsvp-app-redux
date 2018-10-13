import { put, takeLatest, all, call } from "redux-saga/effects";

import * as Api from "../api/api";


// WORKERS
function* fetchGuests() {
    try {
        const guests = yield call(Api.fetchGuests)
        yield put({ type: "GUESTS_FETCH_SUCCEEDED", guests })
    } catch(error) {
        console.log(`Error: ${error}`);
    }
}

function* deleteGuest({id}) {
    try {
        const response = yield call(Api.deleteGuest, id)

        if(response.status === 204) {
            yield put({ type: "DELETE_GUEST_SUCCEEDED", id })
        }

    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

function* addGuest({name}) {
    try {
        const guest = yield call(Api.addGuest, name)

        yield put({ type: "ADD_GUEST_SUCCEEDED", guest })

    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

function* updateGuestName({name, id, isConfirmed}) {
    try {
        const response = yield call(Api.updateGuestName, name, id, isConfirmed)

        if(response.status === 204){
            yield put({ type: "UPDATE_GUEST_SUCCEEDED", name:name, id: id })
        }

    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

function* updateGuestIsConfirmed({id, isConfirmed, name}) {
    try {
        const response = yield call(Api.updateGuestIsConfirmed, id, isConfirmed, name)

        if (response.status === 204) {
            yield put({ type: "TOGGLE_CONFIRMATION_GUEST_SUCCEEDED",  id: id })
        }

    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

// WATCHERS
function* getGuestsWatcher() {
    yield takeLatest('GET_GUESTS', fetchGuests)
}

function* deleteGuestWatcher() {
    yield takeLatest('DELETE_GUEST', deleteGuest)
}

function* addGuestWatcher() {
    yield takeLatest('ADD_GUEST', addGuest)
}

function* updateGuestNameWatcher() {
    yield takeLatest('EDIT_NAME', updateGuestName)
}
function* guestIsConfirmedWatcher() {
    yield takeLatest('TOGGLE_CONFIRMATION_GUEST', updateGuestIsConfirmed)
}

export default function* rootSaga() {
    yield all ([
        getGuestsWatcher(),
        deleteGuestWatcher(),
        addGuestWatcher(),
        updateGuestNameWatcher(),
        guestIsConfirmedWatcher(),
    ]);
}