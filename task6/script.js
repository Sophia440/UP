'use strict';

;(function () {
    let postLib = {};

    function createPost(count, description, author, photoLink) {
        let post = {
            id: count,
            description: description,
            createdAt: new Date(),
            author: author,
            photoLink: '',
        };
        if (photoLink != undefined) {
            post.photoLink = photoLink;
        }
        return post;
    }

    postLib.addPost = function (description, author, photoLink) {
        count++;
        if ((description != undefined) && (author != undefined)) {
            let post = createPost(count, description, author, photoLink);
            if (posts.push(post) == count) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    postLib.getPost = function (id) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id == id) {
                return posts[i];
            }
        }
        return 'post not found';
    }

    postLib.removePost = function (id) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id == id) {
                posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    postLib.editPost = function (id, post) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id == id) {
                if ("description" in post) {
                    posts[i].description = post.description;
                }
                if ("photoLink" in post) {
                    posts[i].photoLink = post.photoLink;
                }
                return true;
            }
        }
        return false;
    }

    postLib.getPosts = function (skip, top, filterConfig) {
        let arr = [];
        if ((skip === undefined) || (skip > posts.length)) {
            skip = 0;
        }
        if ((top === undefined) || (top > posts.length)) {
            top = 10;
        }
        if (filterConfig === undefined) {
            sortByDate(posts);
            return posts.slice(skip, skip + top);
        } else {
            let checkProperties = true;
            for (let i = 0; i < posts.length; i++) {
                for (let key in filterConfig) {
                    if (posts[i][key] != filterConfig[key]) {
                        checkProperties = false;
                    }
                }
                if (checkProperties) {
                    arr.push(posts[i]);
                }
                checkProperties = true;
            }
            sortByDate(arr);
            return arr.slice(skip, skip + top);
        }
    }

    function sortByDate(arr) {
        arr.sort(function (a, b) {
            let keyA = new Date(a.createdAt);
            let keyB = new Date(b.createdAt);
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
        });
    }

    postLib.showAllPosts = function (arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].id + "\n" + arr[i].description + "\n" + arr[i].createdAt + "\n"
                + arr[i].author + "\n" + arr[i].photoLink + "\n");
        }
    }

    window.postLib = postLib;
}());