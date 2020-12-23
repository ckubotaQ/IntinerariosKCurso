import axios from "axios";
const baseURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices";
/**
 * APi
 * https://rapidapi.com/skyscanner/api/skyscanner-flight-search?endpoint=5a9ca8d2e4b084deb4ea61a9
 * @required {country } {currency} {locale} {originplace} {destinationplace} {outboundpartialdate}
 * @option {inboundpartialdate}
 */
export default (url, method, data, headers) => 
    axios ({
        baseURL,
        method,
        url,
        data,
        headers : {
            "x-rapidapi-key": "77430acd08mshba1de63805672d0p12cf6djsn7fcaef5ddd26",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    });
