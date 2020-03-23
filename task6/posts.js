'use strict';

;(function () {
    let posts = [

        {

            id: '1',

            description: 'На данный момент в России официально зафиксировано 438 случаев заражения, из них 17 уже выздоровели',

            createdAt: new Date('2020-03-23T10:00:00'),

            author: 'Иван Иванов',

            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'

        },

        {

            id: '2',

            description: 'Когда уже лето? :(',

            createdAt: new Date('2020-02-17T22:00:00'),

            author: 'Петр Петров',

            photoLink: ''

        },

        {

            id: '3',

            description: 'С праздничком всех!!',

            createdAt: new Date('2020-03-08T09:00:00'),

            author: 'Екатерина Сидорова',

            photoLink: 'https://www.tvr.by/upload/iblock/187/1874c487415f1e8167823b477e50f959.jpg'

        },

         {

         id: '4',
         
         description: '',

         createdAt: new Date('2020-03-12T10:00:00'),

         author: 'Иван Иванов',

         photoLink: 'https://i.pinimg.com/originals/bb/62/7d/bb627d75c9a720ea1e42d2c46b63ab85.jpg'

        },

         {

         id: '5',

         description: 'спокойной ночи',
         
         createdAt: new Date('2020-03-15T04:30:00'),

         author: 'Ольга Матвеева',

         photoLink: ''

        },

         {

         id: '6',

         description: 'no comment',
         
         createdAt: new Date('2020-03-01T13:00:00'),

         author: 'Марина Краснова',

         photoLink: 'https://images.unsplash.com/photo-1500150368783-cb8954285792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

        },

         {

         id: '7',

         description: 'С Днём рождения меня))',
         
         createdAt: new Date('2020-03-13T02:00:00'),

         author: 'Алиса Белова',

         photoLink: ''

        },

         {

         id: '8',

         description: 'lorem ipsum ;)',
         
         createdAt: new Date('2020-03-14T21:00:00'),

         author: 'Иван Иванов',

         photoLink: ''

        },

         {

         id: '9',

         description: 'Погода на сегодня: 13-16 градусов мороза. Одевайтесь теплее!',
         
         createdAt: new Date('2020-03-17T07:00:00'),

         author: 'Павел Морозов',

         photoLink: ''

        },

         {

         id: '10',

         description: ':)',
         
         createdAt: new Date('2020-02-10T20:00:00'),

         author: 'Вячеслав Антонов',

         photoLink: 'https://wedinator.com/wp-content/uploads/2019/06/drawing-ideas-11.jpg'

        },

         {

         id: '11',

         description: 'lorem ipsum ^^',
         
         createdAt: new Date('2020-02-25T14:00:00'),

         author: 'Анастасия Романова',

         photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'

        },

        {

         id: '12',

         description: 'ipsum lorem c:',
         
         createdAt: new Date('2020-02-19T17:00:00'),

         author: 'Анна Куликова',

         photoLink: ''

        },

         {

         id: '13',

         description: 'Нашёл первые подснежники',
         
         createdAt: new Date('2020-01-27T13:00:00'),

         author: 'Александр Рыбаков',

         photoLink: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2010/03/snowdrops-snow.jpg'

        },

         {

         id: '14',

         description: 'Выходя из дома, возьмите с собой пакет (а лучше тканевую сумку)',

         createdAt: new Date('2020-01-11T21:00:00'),

         author: 'Марина Краснова',

         photoLink: 'https://thorndenlive.files.wordpress.com/2019/05/save-planet.jpg'

        },

         {

         id: '15',

         description: 'С Новым годом!!!',

         createdAt: new Date('2020-01-01T00:15:00'),

         author: 'Татьяна Колесникова',

         photoLink: 'https://i.pinimg.com/originals/67/e9/a9/67e9a9072ccb63de45230cc64883da5f.jpg'

        },

         {

         id: '16',

         description: 'рыбки!',
         
         createdAt: new Date('2020-03-17T19:00:00'),

         author: 'Марина Краснова',

         photoLink: 'https://paintingvalley.com/drawings/realistic-koi-drawing-36.jpg'

        },

         {

         id: '17',

         description: 'это что, опять снег в конце марта?',
         
         createdAt: new Date('2020-03-22T05:00:00'),

         author: 'Кирилл Зимин',

         photoLink: ''

        },

         {

         id: '18',

         description: 'С 23 февраля!',
         
         createdAt: new Date('2020-02-23T12:00:00'),

         author: 'Семён Семёнов',

         photoLink: 'https://unecon.ru/sites/default/files/na-sayt-23-fevralya.jpg'

        },

         {

         id: '19',

         description: 'losum iprem))',
         
         createdAt: new Date('2020-03-19T03:00:00'),

         author: 'Валентин Щукин',

         photoLink: ''

        },

         {

         id: '20',

         description: 'утро начинается не с кофе',
         
         createdAt: new Date('2020-03-05T08:00:00'),

         author: 'Нина Ильина',

         photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ6gPx9fes33524bOkuH1gHUZDmlBNnfWn-5qAwi7hRD95xm72'

        },

    ];

    let count = posts.length;

    window.posts = posts;
    window.count = count;
}());

