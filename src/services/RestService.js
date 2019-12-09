import axios from "axios";

export default class RestService {

    getData() {
        return axios.get("https://piebrain.net/api/sensors");
    }

}
