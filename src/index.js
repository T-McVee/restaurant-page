import { pageLoad } from './pageLoad'

const pages = [
  {
    title: 'Home',
    url: '#',
    content:
    {
      splash: {
        col1: {
          h1: 'Welcome To LePizz',
          subtitle: 'Authentic flavours | Localy sourced',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.',
          button: {
            text: 'Menu',
            url: '#'
          },
        },
        col2: {
          img: 'url(../img/pizza-oven.jpg)'
        },
      },
      valueProps: {
        col1: {
          img: 'url(../img/pizza.png)',
          h2: 'Tasty Pizza',
          body: 'Enough said right?'
        },
        col2: {
          img: 'url(../img/waiter.png)',
          h2: 'Amazing service',
          body: 'Experience a true Itallian delight'
        },
        col3: {
          img: 'url(../img/wine.png)',
          h2: 'Curated wine selection',
          body: 'Hand selected wines picked by our inhouse sommilier'
        },
      },
      footer: {
        col1: {
          home: {
            text: 'Home',
            url: ''
          },
          menu: {
            text: 'Menu',
            url: ''
          },
          gallery: {
            text: 'Gallery',
            url: ''
          },
          about: {
            text: 'About',
            url: ''
          },
          contact: {
            text: 'Contact',
            url: ''
          },
        },
        col2: {
          text: 'Icons made by Freepik from www.flaticon.com',
          url: 'https://www.flaticon.com/'
        },
        col3: {
          text: `Created by T-McVee`,
          img: 'url'
        }
      }
    }
  },
  { title: 'Menu', url: '#' },
  { title: 'Gallery', url: '#' },
  { title: 'About', url: '#' },
  { title: 'Contact', url: '#' }
]

const domElements = {
  content: document.querySelector('#content')
};

pageLoad(pages, 0, domElements.content);