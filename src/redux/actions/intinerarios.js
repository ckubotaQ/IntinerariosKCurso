import { GET_LOCATIONS_START} from '../../const/actionTypes';
export const getLocations = payload = (payload) =>({
    type: GET_LOCATIONS_START,
    payload
})