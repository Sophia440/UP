'use strict';

class PostsDOM {
	constructor (posts) {
        this._posts = (posts || []);
    }

    static _showOnePost (author, description, createdAt) {
        var newSection =  document.createElement('section');
            newSection.className= 'users-post';
            var newDiv = document.createElement('div');
            newDiv.className = 'post-profile';

            newSection.appendChild(newDiv);
            var image = document.createElement('img');
            image.setAttribute('src', 'images/default.png');
            image.setAttribute('alt', 'User Profile');
            image.className= 'default-post';
            var ul = document.createElement('ul');
            ul.className = 'ul-post-header';
            var divtext = document.createElement('div');
            divtext.className = 'text';
            var divtags = document.createElement('div');
            divtags.className = 'hashtags';
            var divlike = document.createElement('div');
            var mainV = document.querySelector('main');
            var btnMorePosts = document.querySelector('main .div-btn-more-posts');

            var liName = document.createElement('li');
            var liDate = document.createElement('li');
            var liTime = document.createElement('li');
            var liDel = document.createElement('li');
            var liEdit = document.createElement('li');
            var h4 = document.createElement('h4');
            var btnDel = document.createElement('button');
            var btnEdit = document.createElement('button');

            liName.className = 'name';
            liDate.className = 'li-post';
            liTime.className = 'li-post';
            liDel.className = 'li-post-btn';
            liEdit.className = 'li-post-btn';
            btnDel.className = 'btn-delete';
            btnEdit.className = 'btn-edit';
            var userNameText = document.createTextNode(author);
            var dateText = document.createTextNode(createdAt.getDate() + "." + createdAt.getMonth() + "." + createdAt.getFullYear());
            var timeText = document.createTextNode(createdAt.getHours() + ":" + createdAt.getMinutes());
            h4.appendChild(userNameText);
            liName.append(h4);
            liDate.append(dateText);
            liTime.append(timeText);
            liDel.append(btnDel);
            liEdit.append(btnEdit);

            ul.append(liName);
            ul.append(liDate);
            ul.append(liTime);
            ul.append(liEdit);
            ul.append(liDel);

            var h3 = document.createElement('h3');
            var postText = document.createTextNode(description);
            h3.appendChild(postText);
            divtext.append(h3);

            var ulTag = document.createElement('ul');
            ulTag.className = 'ul-hashtags';

            var liTag1 = document.createElement('li');
            var liTag2 = document.createElement('li');
            var liTag3 = document.createElement('li');
            liTag1.className = 'li-hashtags';
            liTag2.className = 'li-hashtags';
            liTag3.className = 'li-hashtags';
            var a1 = document.createElement('a');
            var a2 = document.createElement('a');
            var a3 = document.createElement('a');
            a1.className = 'class-a';
            a2.className = 'class-a';
            a3.className = 'class-a';
            a1.setAttribute('href', '#');
            a2.setAttribute('href', '#');
            a3.setAttribute('href', '#');
            var tagText1 = document.createTextNode('#hashtag');
            var tagText2 = document.createTextNode('#hashtag');
            var tagText3 = document.createTextNode('#hashtag');
            a1.append(tagText1);
            a2.append(tagText2);
            a3.append(tagText3);

            liTag1.append(a1);
            liTag2.append(a2);
            liTag3.append(a3);
            ulTag.append(liTag1);
            ulTag.append(liTag2);
            ulTag.append(liTag3);
            divtags.append(ulTag);

            newDiv.appendChild(image);
            newDiv.appendChild(ul);
            newDiv.appendChild(divtext);
            newDiv.appendChild(divtags);
            newDiv.appendChild(divlike);

            mainV.insertBefore(newSection, btnMorePosts);
    }

    static _deleteOnePost (id) {
        var viewedPosts = document.getElementsByClassName('users-post');
        //console.log(viewedPosts[id]);
        viewedPosts[id].remove();
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

    static _validate (post) {
	    if ((post.description != undefined) && (post.author != undefined)) {
	        return true;
        } else {
            return false;
        }
    }

    showPosts () {
        for (let i = 0; i < this._posts.length; i++) {
            PostsDOM._showOnePost(this._posts[i].author, this._posts[i].description, this._posts[i].createdAt);
        }
    }

    addPost (author, description) {
        let post = {

            description: description,

            author: author,

            photoLink: ''

        };
        _count++;
        let createdPost = PostsDOM._createPost(_count, post);
		if (this._posts.push(createdPost) == _count) {
            PostsDOM._showOnePost(author, description, createdPost.createdAt);
	        return true;
	    } 
	    return false;
    }

    deletePost (id) {
        PostsDOM._deleteOnePost(id);
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id == id) {
                this._posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    editPost (id, post) {
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id == id) {
            	if (PostsDOM._validate(this._posts[i])) {
            		if ("description" in post) {
                    	this._posts[i].description = post.description;
                	}
	                if ("photoLink" in post) {
	                    this._posts[i].photoLink = post.photoLink;
                    }
                    PostsDOM._deleteOnePost(i + 1);
                    PostsDOM._showOnePost(this._posts[i].author, this._posts[i].description, this._posts[i].createdAt);
	                return true;
            	} else {
            		return false;
            	}
            }
        }
        return false;
    }
        
}
