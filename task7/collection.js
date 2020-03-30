'use strict';

class PostCollection {
	constructor (posts) {
		this._posts = (posts || []);
	}

	static _createPost (count, post) {
        let postWithCountAndDate = {
            id: count,
            description: post.description,
            createdAt: new Date(),
            author: post.author,
            photoLink: '',
        };
        if (post.photoLink != undefined) {
            postWithCountAndDate.photoLink = post.photoLink;
        }
        return postWithCountAndDate;
    }

    static validate (post) {
	    if ((post.description != undefined) && (post.author != undefined)) {
	        return true;
        } else {
            return false;
        }
    }

	add (post) {
		if (PostCollection.validate(post)) {
			_count++;
			if (this._posts.push(PostCollection._createPost(_count, post)) == _count) {
	            return true;
	        } else {
	            return false;
	        }
		} else {
			return false;
		}
    }

    addAll (posts) {
    	let invalidPosts = [];
    	for (let i = 0; i < posts.length; i++) {
            if (PostCollection.validate(posts[i])) {
                this.add(posts[i]);
            } else {
            	invalidPosts.push(posts[i]);
            }
        }
    	return invalidPosts;
    }

    get (id) {
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id == id) {
                return this._posts[i];
            }
        }
        return undefined;
    }

    remove (id) {
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id == id) {
                this._posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    edit (id, post) {
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id == id) {
            	if (PostCollection.validate(this._posts[i])) {
            		if ("description" in post) {
                    	this._posts[i].description = post.description;
                	}
	                if ("photoLink" in post) {
	                    this._posts[i].photoLink = post.photoLink;
	                }
	                return true;
            	} else {
            		return false;
            	}
            }
        }
        return false;
    }

    getPage (skip, top, filterConfig) {
        let filtered = this._posts;
        if ((skip === undefined) || (skip > this._posts.length)) {
            skip = 0;
        }
        if ((top === undefined) || (top > this._posts.length)) {
            top = 10;
        }
        if (filterConfig === undefined) {
            PostCollection.sortByDate(filtered);
            return filtered.slice(skip, skip + top);
        } else {
            filtered = this._posts.filter((post) => {
                let flag = true;
                for (let key in filterConfig) {
                    if (post[key] != filterConfig[key]) {
                        flag = false;
                    }
                }
                return flag;
            });
            PostCollection.sortByDate(filtered);
            return filtered.slice(skip, skip + top);
        }
    }

    static sortByDate (arr) {
        arr.sort(function (a, b) {
            let keyA = new Date(a.createdAt);
            let keyB = new Date(b.createdAt);
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
        });
    }

    showAllPostsInCollection () {
        for (let i = 0; i < this._posts.length; i++) {
            console.log(this._posts[i].id + "\n" + this._posts[i].description + "\n" + this._posts[i].createdAt + "\n"
                + this._posts[i].author + "\n" + this._posts[i].photoLink + "\n");
        }
	}

    showAllPostsInArr (arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].id + "\n" + arr[i].description + "\n" + arr[i].createdAt + "\n"
                + arr[i].author + "\n" + arr[i].photoLink + "\n");
        }
    }	
}
