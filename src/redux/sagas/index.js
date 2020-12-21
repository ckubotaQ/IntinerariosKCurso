import { all } from "redux-saga/effects";
import intinerarios from "./intinerarios";
export default function* rootSaga(){
    yield all([intinerarios()]);
}