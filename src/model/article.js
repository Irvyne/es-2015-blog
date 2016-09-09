"use strict";

import API from "./../api";

const RESOURCE = "articles";

let Article = {
    findAll() {
        return API.fetch(RESOURCE);
    },
    find(id) {
        return API.fetch(`${RESOURCE}/${id}`);
    }
};

export default Article;