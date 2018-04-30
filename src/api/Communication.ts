import axios from "axios";

class Communication {

    url: string;

    constructor(url: string) {
        this.url = url;
    }

    public call(cmd: string, params: Object = {}) {
        return axios.post(this.url, {cmd: cmd, ...params});
        /*.then(data => {
                // console.log("response:", data);
                if (data === "ok" || data.status === "ok") {
                    // console.log("response ok");
                    p.resolve(data.data);
                } else {
                    // console.log("response fail", data);
                    p.reject(data.error || data.message);
                }},
                error => p.reject(error.responseJSON.message)
            )
            .fail(data => p.reject("Какая-то ошибка", data));
        return p;*/
    }
}

export default Communication;