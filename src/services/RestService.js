import axios from "axios";

export default class RestService {

    getSensorDataByType(sensortype) {
        return axios.get("https://piebrain.net/api/sensorData/name/" + sensortype);
    }


    changeLight(value) {
        return axios.post("https://piebrain.net/api/leds", {
            "ledId": "1",
            "ledValue": value
        });
    }


}
