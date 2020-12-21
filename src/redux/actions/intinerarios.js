import { GET_LOCATIONS_START} from '../../const/actionTypes';
export const getLocations = payload = () =>({
    type: GET_LOCATIONS_START,
    payload
})