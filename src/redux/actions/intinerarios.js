import { GET_LOCATIONS_START, GET_INTINERARIOS_START} from '../../const/actionTypes';
export const getLocations = payload =>({
    type: GET_LOCATIONS_START,
    payload
});
export const getIntinerarios = payload => ({
    type: GET_INTINERARIOS_START,   
    payload
})  