'use strict';

let questionShowAllPosts = confirm('Show all posts in the console?');
if (questionShowAllPosts) {
    console.log('all posts: ');
    postLib.showAllPosts(posts);
}

console.log('getPosts: ');
postLib.showAllPosts(postLib.getPosts(0, 10));
postLib.showAllPosts(postLib.getPosts(10, 10));
postLib.showAllPosts(postLib.getPosts(0, 10, {author: 'Иван Иванов'}));

console.log('getPost: ');
console.log('getting #1: ' + postLib.getPost('1'));
console.log('getting #100: ' + postLib.getPost('100'));

console.log('addPost: ');
console.log('adding valid post: ' + postLib.addPost('description', 'author', ''));
console.log('adding invalid post: ' + postLib.addPost('description'));

console.log('editPost: ');
console.log('editing #2: ' + postLib.editPost('2', {description: 'edited'}));
console.log(postLib.getPost('2'));
console.log('editing #25: ' + postLib.editPost('25', {description: 'edited'}));

console.log('removePost: ');
console.log('removing #1: ' + postLib.removePost('1'));
console.log('removing #100: ' + postLib.removePost('100'));