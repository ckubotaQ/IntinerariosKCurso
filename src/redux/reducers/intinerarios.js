import { GET_LOCATIONS_START, GET_LOCATIONS_SUCCES, GET_LOCATIONS_ERROR,
GET_INTINERARIOS_START, GET_INTINERARIOS_SUCCESS, GET_INTINERARIOS_ERROR} from "../../const/actionTypes";
export default function (state, action) {
    switch (action.type) {
        case GET_LOCATIONS_START:
            return{...state};

            break;
        case GET_LOCATIONS_SUCCES: 
            return {...state, places: action.results};
        break;
        case GET_LOCATIONS_ERROR: 
            return {...state, places:  null, error: action.error};
        break;
        case GET_INTINERARIOS_START : 
            return {...state};
        break;
        case GET_INTINERARIOS_SUCCESS: 
            return {...state};
        break; 
        case GET_LOCATIONS_ERROR: 
            return {...state, error: action.error}; 
        break;
        default:
            return {...state};
    }
}