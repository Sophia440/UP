'use strict';

let postsDOM = new PostsDOM(posts);
postsDOM.showPosts();
postsDOM.addPost('author', 'new post');
postsDOM.addPost('author', 'post to delete');
postsDOM.addPost('author', 'post to edit');
postsDOM.deletePost(21);
postsDOM.editPost(22, {

    description: 'edited description',

    author: 'edited author',

    photoLink: ''

});

// for (let i = 0; i < posts.length; i++) {
//     var newSection =  document.createElement('section');
//     newSection.className= 'users-post';
//     var newDiv = document.createElement('div');
//     newDiv.className = 'post-profile';

//     newSection.appendChild(newDiv);
//     var image = document.createElement('img');
//     image.setAttribute('src', 'images/default.png');
//     image.setAttribute('alt', 'User Profile');
//     image.className= 'default-post';
//     var ul = document.createElement('ul');
//     ul.className = 'ul-post-header';
//     var divtext = document.createElement('div');
//     divtext.className = 'text';
//     var divtags = document.createElement('div');
//     divtags.className = 'hashtags';
//     var divlike = document.createElement('div');
//     var mainV = document.querySelector('main');
//     var btnMorePosts = document.querySelector('main .div-btn-more-posts');

//     var liName = document.createElement('li');
//     var liDate = document.createElement('li');
//     var liTime = document.createElement('li');
//     var liDel = document.createElement('li');
//     var liEdit = document.createElement('li');
//     var h4 = document.createElement('h4');
//     var btnDel = document.createElement('button');
//     var btnEdit = document.createElement('button');

//     liName.className = 'name';
//     liDate.className = 'li-post';
//     liTime.className = 'li-post';
//     liDel.className = 'li-post-btn';
//     liEdit.className = 'li-post-btn';
//     btnDel.className = 'btn-delete';
//     btnEdit.className = 'btn-edit';
//     var userNameText = document.createTextNode('02 мар. 2020 г.');
//     var dateText = document.createTextNode('02 мар. 2020 г.');
//     var timeText = document.createTextNode('15:30');
//     h4.appendChild(userNameText);
//     liName.append(h4);
//     liDate.append(dateText);
//     liTime.append(timeText);
//     liDel.append(btnDel);
//     liEdit.append(btnEdit);

//     ul.append(liName);
//     ul.append(liDate);
//     ul.append(liTime);
//     ul.append(liEdit);
//     ul.append(liDel);

//     var h3 = document.createElement('h3');
//     var postText = document.createTextNode('Lorem Ipsum');
//     h3.appendChild(postText);
//     divtext.append(h3);

//     var ulTag = document.createElement('ul');
//     ulTag.className = 'ul-hashtags';

//     var liTag1 = document.createElement('li');
//     var liTag2 = document.createElement('li');
//     var liTag3 = document.createElement('li');
//     liTag1.className = 'li-hashtags';
//     liTag2.className = 'li-hashtags';
//     liTag3.className = 'li-hashtags';
//     var a1 = document.createElement('a');
//     var a2 = document.createElement('a');
//     var a3 = document.createElement('a');
//     a1.className = 'class-a';
//     a2.className = 'class-a';
//     a3.className = 'class-a';
//     a1.setAttribute('href', '#');
//     a2.setAttribute('href', '#');
//     a3.setAttribute('href', '#');
//     var tagText1 = document.createTextNode('#hashtag');
//     var tagText2 = document.createTextNode('#hashtag');
//     var tagText3 = document.createTextNode('#hashtag');
//     a1.append(tagText1);
//     a2.append(tagText2);
//     a3.append(tagText3);

//     liTag1.append(a1);
//     liTag2.append(a2);
//     liTag3.append(a3);
//     ulTag.append(liTag1);
//     ulTag.append(liTag2);
//     ulTag.append(liTag3);
//     divtags.append(ulTag);

//     newDiv.appendChild(image);
//     newDiv.appendChild(ul);
//     newDiv.appendChild(divtext);
//     newDiv.appendChild(divtags);
//     newDiv.appendChild(divlike);

//     mainV.insertBefore(newSection, btnMorePosts);
// }


// //newDiv.style.backgroundColor = 'green';
// //newSection.style.backgroundColor = 'yellow';
// //h4.style.color = 'black';
// //btnEdit.style.backgroundColor = 'blue';
// //document.getElementsByClassName('div-btn-more-posts').before(newSection);

// var newSection =  document.createElement('section');
// newSection.className= 'users-post';
// var newDiv = document.createElement('div');
// newDiv.className = 'post-profile';

// newSection.appendChild(newDiv);
// var image = document.createElement('img');
// image.setAttribute('src', 'images/default.png');
// image.setAttribute('alt', 'Default picture');
// image.className= 'default-post';
// var ul = document.createElement('ul');
// ul.className = 'ul-post-header';
// var divtext = document.createElement('div');
// divtext.className = 'text';
// var divtags = document.createElement('div');
// divtags.className = 'hashtags';
// var divlike = document.createElement('div');
// var mainV = document.querySelector('main');
// var btnMorePosts = document.querySelector('main .div-btn-more-posts');

// var liName = document.createElement('li');
// var liDate = document.createElement('li');
// var liTime = document.createElement('li');
// var liDel = document.createElement('li');
// var liEdit = document.createElement('li');
// var h4 = document.createElement('h4');
// var btnDel = document.createElement('button');
// var btnEdit = document.createElement('button');

// liName.className = 'name';
// liDate.className = 'li-post';
// liTime.className = 'li-post';
// liDel.className = 'li-post-btn';
// liEdit.className = 'li-post-btn';
// btnDel.className = 'btn-delete';
// btnEdit.className = 'btn-edit';
// var userNameText = document.createTextNode('User Name');
// var dateText = document.createTextNode('02 мар. 2020 г.');
// var timeText = document.createTextNode('15:30');
// h4.appendChild(userNameText);
// liName.append(h4);
// liDate.append(dateText);
// liTime.append(timeText);
// liDel.append(btnDel);
// liEdit.append(btnEdit);

// ul.append(liName);
// ul.append(liDate);
// ul.append(liTime);
// ul.append(liEdit);
// ul.append(liDel);

// var h3 = document.createElement('h3');
// var postText = document.createTextNode('Lorem Ipsum');
// h3.appendChild(postText);
// divtext.append(h3);

// var ulTag = document.createElement('ul');
// ulTag.className = 'ul-hashtags';

// var liTag1 = document.createElement('li');
// var liTag2 = document.createElement('li');
// var liTag3 = document.createElement('li');
// liTag1.className = 'li-hashtags';
// liTag2.className = 'li-hashtags';
// liTag3.className = 'li-hashtags';
// var a1 = document.createElement('a');
// var a2 = document.createElement('a');
// var a3 = document.createElement('a');
// a1.className = 'class-a';
// a2.className = 'class-a';
// a3.className = 'class-a';
// a1.setAttribute('href', '#');
// a2.setAttribute('href', '#');
// a3.setAttribute('href', '#');
// var tagText1 = document.createTextNode('#hashtag');
// var tagText2 = document.createTextNode('#hashtag');
// var tagText3 = document.createTextNode('#hashtag');
// a1.append(tagText1);
// a2.append(tagText2);
// a3.append(tagText3);

// liTag1.append(a1);
// liTag2.append(a2);
// liTag3.append(a3);
// ulTag.append(liTag1);
// ulTag.append(liTag2);
// ulTag.append(liTag3);
// divtags.append(ulTag);

// newDiv.appendChild(image);
// newDiv.appendChild(ul);
// newDiv.appendChild(divtext);
// newDiv.appendChild(divtags);
// newDiv.appendChild(divlike);

// mainV.insertBefore(newSection, btnMorePosts);