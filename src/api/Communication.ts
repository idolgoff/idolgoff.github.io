interface JQuery {
    post;
    Deferred;
}

declare const $: JQuery;

class Communication {

    url: string;

    constructor(url: string) {
        this.url = url;
    }

    public call(cmd: string, params: Object = {}) {
        // console.log("call: " + cmd);
        let d = $.Deferred();
        $.post(this.url, (<any>Object).assign({}, {cmd: cmd}, params))
            .then(data => {
                // console.log("response:", data);
                if (data === "ok" || data.status === "ok") {
                    // console.log("response ok");
                    d.resolve(data.data);
                } else {
                    // console.log("response fail", data);
                    d.reject(data.error || data.message);
                }},
                error => d.reject(error.responseJSON.message)
            )
            .fail(data => d.reject("Какая-то ошибка", data));
        return d;
    }
}

export default Communication;