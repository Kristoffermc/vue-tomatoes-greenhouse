import axios from "axios";

export default class RestService {

    getSensorDataByType(sensortype, count) {
        return axios.get("https://piebrain.net/api/sensorData/name/" + sensortype, {
            headers: {
                limit: count
            }
        });
    }


    changeLight(value) {
        return axios.post("https://piebrain.net/api/leds", {
            "ledId": "1",
            "ledValue": value
            }
        );
    }


}
