import axios from "axios";

const instancePlace = axios.create({
    baseURL:'http://localhost:9093/api',
    headers: {
        'Access-Control-Allow-Origin':'*'
        //to avoid the error
    }
})
export default instancePlace;

