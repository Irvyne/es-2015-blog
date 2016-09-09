"use strict";

import moment from "moment";
import xss from "xss-filters";

let ui = {
    renderArticles(articles){
        let target = document.querySelector("#content-main > .row");

        let elements = articles.map(article => {
            let {title, createdAt, updatedAt} = article;
            return articleElement(title, createdAt, updatedAt);
        });

        target.innerHTML = elements.join('');
    },

    renderUsers(users){
        let target = document.querySelector("#aside-users > .row");

        let elements = users.map((user) => {
            let {id, name, username} = user;
            return userElement(id, name, username);
        });

        target.innerHTML = elements.join('');
    },

    renderCategories(categories){
        let target = document.querySelector("#aside-categories > .row");

        let elements = categories.map((category) => {
            let {id, name} = category;
            return categoryElement(id, name);
        });

        target.innerHTML = elements.join(',&nbsp;');
    }
};

function articleElement(title, createdAt, updatedAt) {
    let safeTitle = xss.inHTMLData(title);
    let safeCreatedAt = moment(xss.inHTMLData(createdAt)).calendar();
    let safeUpdatedAt = moment(xss.inHTMLData(updatedAt)).fromNow();

    return `
    <article class='article col-xs-12 col-sm-6 col-md-4 col-lg-3'>
        <h3 class='article-title'>${safeTitle}</h3>
        <p class='article-meta'>Created ${safeCreatedAt}</p>
        <p class='article-meta'>Last updated ${safeUpdatedAt}</p>
    </article>`;
}

function userElement(id, name, username) {
    let safeId = xss.inHTMLData(id);
    let safeName = xss.inHTMLData(name);
    let safeUsername = xss.inHTMLData(username);

    return `
    <div class='user col-md-12'>
        <h3 class='user-name'>${safeName}</h3>
        <p>Username: ${safeUsername}</p>
    </div>`;
}

function categoryElement(id, title) {
    let safeId = xss.inHTMLData(id);
    let safeTitle = xss.inHTMLData(title);

    return `<a href="#category-${safeId}" data-id="${safeId}" data-type="category">${safeTitle}</a>`;
}

// function activeUsersTemplate(name, avatar){
//
//     let safeName = xss.inHTMLData(name);
//     let safeAvatar = xss.inHTMLData(avatar);
//
//     let template = `
//     <div class="active-avatar">
//         <img width="54" src="assets/images/${safeAvatar}">
//         <h5 class="post-author">${safeName}</h5>
//     </div>`;
//
//     return template;
// }

export default ui;