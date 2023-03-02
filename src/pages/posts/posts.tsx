import React from 'react';
import { StyledPosts } from './posts.styles';
import { Post } from '../../components/post/post';

export const Posts = () => {
  const posts = [
    {
      slug: 'tr-txyefx',
      title: 't',
      description: 'tr',
      body: 'rt',
      createdAt: '2023-03-02T11:21:25.182Z',
      updatedAt: '2023-03-02T11:21:50.132Z',
      tagList: [],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'ananasssss',
        image: 'https://upa2.ru/image/cache/catalog/%20категорий/chelovechek_galochka-1000x1000.jpg',
        following: false,
      },
    },
    {
      slug: 's-wwmkem',
      title: 's',
      description: 'xs',
      body: 'sa',
      createdAt: '2023-03-02T11:16:41.565Z',
      updatedAt: '2023-03-02T11:16:41.565Z',
      tagList: ['sx'],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'ananasssss',
        image: 'https://upa2.ru/image/cache/catalog/%20категорий/chelovechek_galochka-1000x1000.jpg',
        following: false,
      },
    },
    {
      slug: 'check-markdown-again-dl7pxm',
      title: 'Check markdown again',
      description: 'sda',
      body: 'asas',
      createdAt: '2023-03-02T11:13:30.800Z',
      updatedAt: '2023-03-02T11:13:30.800Z',
      tagList: ['programming'],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'sonya12',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyIWiK8-Yz0mpAJaCzBcwRClyrtbUdM04lA&usqp=CAU',
        following: false,
      },
    },
    {
      slug: 'once-i-bought-milk-gl69x8',
      title: 'Once I bought milk...',
      description:
        'What if, as you aged, you could make your heart as good as new? Your brain? Every other part of your body that ages? That’s the promise of what lies ahead with one of the major players in the quest for longevity: senolytics.',
      body: 'sdsdsd',
      createdAt: '2023-03-02T11:13:16.060Z',
      updatedAt: '2023-03-02T11:26:22.600Z',
      tagList: ['programming'],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'sonya12',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyIWiK8-Yz0mpAJaCzBcwRClyrtbUdM04lA&usqp=CAU',
        following: false,
      },
    },
    {
      slug: 'fgd-9oz3kn',
      title: 'fgd',
      description: 'fgd',
      body: 'fgd',
      createdAt: '2023-03-02T11:01:31.040Z',
      updatedAt: '2023-03-02T11:01:46.519Z',
      tagList: ['yyy'],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'ananasssss',
        image: 'https://upa2.ru/image/cache/catalog/%20категорий/chelovechek_galochka-1000x1000.jpg',
        following: false,
      },
    },
    {
      slug: 'react-9wpmjv',
      title: 'react',
      description: 'react',
      body: 'react',
      createdAt: '2023-03-02T10:35:01.152Z',
      updatedAt: '2023-03-02T11:02:37.114Z',
      tagList: ['text', 'tag'],
      favorited: false,
      favoritesCount: 2,
      author: {
        username: 'superstas',
        image: 'https://i1.wp.com/bookmaker-ratings.ru/wp-content/uploads/2022/11/4600.jpeg?ssl=1',
        following: false,
      },
    },
    {
      slug: 'left-favorite-likes-mv6etq',
      title: 'Left favorite likes',
      description: 'toastify',
      body: 'className\tstring\tAdd optional classes to the container\nbodyClassName\tstring\tAdd optional classes to the TransitionGroup container\nstyle\tobject\tAdd optional inline style to the container\nprogressClassName\tstring\tAdd optional classes to the progress bar\nprogressStyle\tobject\tAdd optional inline style to the progress bar\ndraggable\tbool\tAllow toast to be draggable\ndraggablePercent\tnumber\tThe percentage of the toast\'s width it takes for a drag to dismiss a toast(value between 0 and 100)\ndraggableDirection\t"x" | "y"\tSpecify the drag direction. Default is x\ncontainerId\tstring | number\tUsed to match a specific Toast container\nrole\tstring\tDefine the ARIA role for the toasts\ndelay\tnumber\tLet you delay the toast appearance. Pass a value in ms\nonClick\tfunction\tCalled when click inside Toast notification\nrender\tReactNode\tOnly available when using toast.update\nisLoading\tbool\tOnly available when using `toast.loading\'\ndata\tany\tany additional data you want to pass toast("hello", { data: {key:',
      createdAt: '2023-03-02T10:22:56.261Z',
      updatedAt: '2023-03-02T10:22:56.261Z',
      tagList: ['toast'],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'burn',
        image:
          'https://e7.pngegg.com/pngimages/35/294/png-clipart-serious-sam-2-serious-sam-3-bfe-serious-sam-the-first-encounter-serious-sam-hd-the-first-encounter-serious-sam-double-d-serious-sam-orange-logo-thumbnail.png',
        following: false,
      },
    },
    {
      slug: 'czc-sqtfyb',
      title: 'czc',
      description:
        'Some measure seasonal shifts by Earth’s position relative to the sun, while others use annual temperature cycles. Here’s the difference between astronomical and meteorological seasons.',
      body: 'сывы',
      createdAt: '2023-03-02T10:18:21.568Z',
      updatedAt: '2023-03-02T10:18:21.568Z',
      tagList: ['programming'],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'petrpetr',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
    },
    {
      slug: 'chto-h7q1ug',
      title: 'что',
      description: 'что',
      body: 'что',
      createdAt: '2023-03-02T10:11:09.335Z',
      updatedAt: '2023-03-02T10:11:09.335Z',
      tagList: ['programming'],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'petrpetr',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false,
      },
    },
    {
      slug: 'testy-t2fa33',
      title: 'тесты',
      description: 'тесты',
      body: 'тесты',
      createdAt: '2023-03-02T10:10:54.867Z',
      updatedAt: '2023-03-02T10:10:54.867Z',
      tagList: ['programming'],
      favorited: false,
      favoritesCount: 0,
      author: {
        username: 'sonya12',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyIWiK8-Yz0mpAJaCzBcwRClyrtbUdM04lA&usqp=CAU',
        following: false,
      },
    },
  ];
  const postsElems = posts.map((post) => <Post key={`slug_${post.slug}`} {...post} />);

  return <StyledPosts>{postsElems}</StyledPosts>;
};
