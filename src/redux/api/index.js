import axios from "axios";
const baseURL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices";
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
