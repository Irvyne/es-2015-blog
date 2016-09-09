"use strict";

import API from "./../api";

let Category = {
    findAll() {
        return API.fetch("categories");
    },
    find(id) {
        return API.fetch(`categories/${id}`);
    }
};

export default Category;