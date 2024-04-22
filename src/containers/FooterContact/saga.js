/* eslint-disable no-unused-vars */
import { call, put, takeEvery } from 'redux-saga/effects';
import ContactdetailAPI from '../MainPage/api/contactdetail';
import { SAVE_CONTACT, CONTACT_S_DATA, SEND_MESSAGE_LOADING } from "./constants";
export default function* contactdeatailsSaga() {
  yield takeEvery(SAVE_CONTACT, contactdata)
}
function* contactdata(action) {
  console.log("sagacontact..", action.savecdata)
  try{
    yield put({type: SEND_MESSAGE_LOADING, loading: true})
    const contactinfo = yield call(ContactdetailAPI.savecontatinformation, action.savecdata)
    yield put({ type: CONTACT_S_DATA, contactinfo });
  } 
  catch(err) {
    console.log('Error in contact us:', err);
  }
  finally {
    yield put({type: SEND_MESSAGE_LOADING, loading: false})
  }
}