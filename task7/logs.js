'use strict';

let collection = new PostCollection(posts);
let questionShowAllPosts = confirm('Show all posts in the console?');
if (questionShowAllPosts) {
    console.log('all posts: ');
    collection.showAllPostsInCollection();
}

console.log('getPage: ');
collection.showAllPostsInArr(collection.getPage(0, 10));
collection.showAllPostsInArr(collection.getPage(10, 10));
collection.showAllPostsInArr(collection.getPage(0, 10, {author: 'Иван Иванов'}));

console.log('get: ');
console.log('getting #1: ' + collection.get('1'));
console.log('getting #100: ' + collection.get('100'));

console.log('add: ');
console.log('adding valid post: ' + collection.add({author: 'Иван Иванов', description: 'description'}));
console.log('adding invalid post: ' + collection.add({author: 'Иван Иванов'}));

console.log('addAll: ');
let allValidPosts = [

        {

            description: 'valid post 1',

            author: 'valid author 1',

            photoLink: ''

        },

        {

            description: 'valid post 2',

            author: 'valid author 2',

            photoLink: ''

        },
];

let someInvalidPosts = [

        {

            description: 'valid post 3',

            author: 'valid author 3',

            photoLink: ''

        },

        {

            author: 'invalid author 1',

            photoLink: ''

        },

        {

            description: 'invalid post 1',

            photoLink: ''

        },
];
console.log('adding all valid posts\nlength of result collection: ' + collection.addAll(allValidPosts).length);
console.log('adding some invalid posts\nlength of result collection: ' + collection.addAll(someInvalidPosts).length);

console.log('edit: ');
console.log('editing #2: ' + collection.edit('2', {description: 'edited'}));
console.log(collection.get('2'));
console.log('editing #25: ' + collection.edit('25', {description: 'edited'}));

console.log('remove: ');
console.log('removing #1: ' + collection.remove('1'));
console.log('removing #100: ' + collection.remove('100'));

console.log('validate: ');
console.log('valid post: ' + PostCollection.validate({author: 'Иван Иванов', description: 'description'}));
console.log('invalid post: ' + PostCollection.validate({author: 'Иван Иванов'}));
