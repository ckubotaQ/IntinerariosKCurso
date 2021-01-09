import { GET_LOCATIONS_START, GET_LOCATIONS_SUCCES, GET_LOCATIONS_ERROR, GET_INTINERARIOS_START,
GET_INTINERARIOS_SUCCESS, GET_INTINERARIOS_ERROR } from "../../const/actionTypes";
import { takeLatest, call, put} from "redux-saga/effects";
import apiCall from "../api";
const country = "MX";
const currency = "USD";
const local = "en-US";

export function* getLocations ({ payload }){
    try {
        const url = '/autosuggest/v1.0/'+country+'/'+currency+'/'+local+'/?query='+payload.query;
        const method= "GET";
      const result=yield call(apiCall,url,
        method);
       
       yield put({type: GET_LOCATIONS_SUCCES, results: result.data.Places});
    } catch (error) {
        yield put({ type: GET_LOCATIONS_ERROR, error})
    }
}
export function* getIntinerarios ({payload}) {
    try {
        
    } catch (error) {
        
    }
}
export default function* intinerarios() {
    yield takeLatest(GET_LOCATIONS_START, getLocations);
    yield takeLatest(GET_INTINERARIOS_START, getIntinerarios);

}
