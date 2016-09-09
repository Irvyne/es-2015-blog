"use strict";

import Article from "./model/article";
import User from "./model/user";
import Category from "./model/category";
import ui from "./ui";

Article.findAll()
    .then(ui.renderArticles)
;

User.findAll()
    .then(ui.renderUsers)
;

Category.findAll()
    .then(ui.renderCategories)
;
