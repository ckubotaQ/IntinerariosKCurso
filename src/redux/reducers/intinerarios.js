import { GET_LOCATIONS_START, GET_LOCATIONS_SUCCES, GET_LOCATIONS_ERROR } from "../../const/actionTypes";
export default function (state, action) {
    switch (action.type) {
        case GET_LOCATIONS_START:
            return{};

            break;
        case GET_LOCATIONS_SUCCES: 
            return {};
        break;
        case GET_LOCATIONS_ERROR: 
            return {};
        break;
        default:
            return {};
    }
}