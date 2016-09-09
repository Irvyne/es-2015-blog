"use strict";

import API from "./../api";

let User = {
    findAll() {
        return API.fetch("users");
    },
    find(id) {
        return API.fetch(`users/${id}`);
    }
};

export default User;