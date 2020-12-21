import { GET_LOCATIONS_START, GET_LOCATIONS_SUCCES, GET_LOCATIONS_ERROR } from "../../const/actionTypes";
import { takeLatest, call} from "redux-saga/effects";
import apiCall from "../api";
const country = "MX";
const currency = "USD";
const local = "en-US";

export function* getLocations ({payload}){
    try {
        const url = '/autosuggest/v1.0/'+country+'/'+currency+'/'+local+'/?query='+payload.query;
        const method= "GET";
      const result=yield call(apiCall,url,
        method);
        console.log(result);
        console.log(payload.query);
    } catch (error) {
        console.log(error);
    }
}
export default function* intinerarios() {
    yield takeLatest(GET_LOCATIONS_START,getLocations);


}