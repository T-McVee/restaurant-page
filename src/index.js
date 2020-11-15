import { navBar } from './navBar'
import { row } from './row.js'

const pageLoad = (() => {

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
          icons: {
            pizza: 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>',
            service: 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>',
            wine: 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>',
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

  const _init = (() => {
    let sections = Object.keys(pages[0].content);

    content.appendChild(navBar(pages));
    sections.forEach(section => {
      content.appendChild(row(pages[0].content[section], section));
    });
    /* content.appendChild(row(pages[0].content[rows[0]], rows[0]));
    content.appendChild(row(pages[0].content[rows[1]], rows[1])); */
  })();
})();


