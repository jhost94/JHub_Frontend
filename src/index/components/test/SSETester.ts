import Div from "@jhub-center/jhostify-script/framework/components/external/basic/formatting/Div";
import Logger from "@jhub-center/jhostify-script/framework/debug/Logger";
import { RequestOptions } from "@jhub-center/jhostify-script/framework/web/http/HttpClient";
import SseClient from "@jhub-center/jhostify-script/framework/web/http/SseClient";

export default class SSETester extends Div {

    constructor() {
        super();
        let sse: null | SseClient = null;
        const t = new Div();
        const params = new Map<string, string>();
        const headers = new Map<string, string>();
        params.set("duration", "30");
        params.set("durationUnit", "SECONDS");
        params.set("frequency", "1");
        params.set("frequencyUnit", "SECONDS");
        headers.set("Content-Type", "application/json");
        const options: RequestOptions = {
            body: "{\"test\": \"s\"}",
            method: "POST",
            params: params,
            headers: headers
        };
        t.content("TEST");

        t.onClick(c => {
            if (!sse) {
                sse = new SseClient();
                sse.onMessage = e => {
                    // const d = document.getElementById(this.getId());
                    // const content = `
                    // ${e.id}
                    // -----
                    // ${e.type}
                    // -----
                    // ${e.data}
                    // -----
                    // `;
                    // if (d) d.textContent = content;
                    Logger.log('INFO', e);
                };
                sse.connect("http://localhost:8080/sse", options);
            }
        });

        this.children([t]);
    }
}