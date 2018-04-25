/**
 * Created by dolgov.ivan@gmail.com on 26.04.2018.
 */
import Communication from "./Communication";

class PurchaseApi extends Communication {

    sendPurchase = (data) => this.call("send_purchase", {data});

}

const api = new PurchaseApi(`/purchase`);

export default api;