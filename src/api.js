"use strict";

import {BASE_API_URL, BASE_API_PORT} from "./config"

let API = {
    fetch(resource) {
        return new Promise((resolve, reject) => {
            let uri = `${BASE_API_URL}:${BASE_API_PORT}/${resource}`;
            let request = new XMLHttpRequest();

            request.open("GET", uri, true);

            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    resolve(JSON.parse(request.response));
                }
            };

            request.onerror = () => {
                reject(new Error('API error!'));
            };

            request.send();
        })
    }
};

export default API;
