import { footer } from './components/footer';
import { navBar } from './components/navBar'
import { pageLoad } from './pageLoad'

const domElements = {
  content: document.querySelector('#content')
};

const siteData = {
  pages: [
    {
      index: 0, title: 'Home', url: '#', content:
      {
        splash: {
          col1: {
            h1: 'Welcome To LePizz',
            span: 'Authentic flavours | Localy sourced',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.',
            button: {
              text: 'Menu',
              action: ''
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
            span: 'Enough said right?'
          },
          col2: {
            img: 'url(../img/waiter.png)',
            h2: 'Amazing service',
            span: 'Experience a true Itallian delight'
          },
          col3: {
            img: 'url(../img/wine.png)',
            h2: 'Curated wine selection',
            span: 'Hand selected wines picked by our inhouse sommilier'
          },
        },
      }
    },
    {
      index: 1, title: 'Menu', url: '#', content: {
        lunch: {
          col1: {
            h2: 'Margarita',
            body: 'cheese, basil, love'
          },
          col2: {
            h2: 'Capricosa',
            body: 'Artichoke, Mozzerella, Basil, rich tomato sauce'
          },
          col3: {
            h2: 'Al Fungi',
            body: 'All the shrooms, spicy peperoni, rich tomato sauce'
          }
        },
        dinner: {
          col1: {
            h2: 'Margarita',
            body: 'cheese, basil, love',
            price: '14'
          },
          col2: {
            h2: 'Capricosa',
            body: 'Artichoke, Mozzerella, Basil, rich tomato sauce',
            price: '16'
          },
          col3: {
            h2: 'Al Fungi',
            body: 'All the shrooms, spicy peperoni, rich tomato sauce',
            price: '20'
          }
        }
      }
    },
    { index: 2, title: 'Gallery', url: '#' },
    { index: 3, title: 'About', url: '#' },
    { index: 4, title: 'Contact', url: '#' }
  ],
  footer: {
    col2: {
      text: `Created by T-McVee`
    },
    col3: {
      text1: 'Icons made by Freepik from www.flaticon.com',
    }
  }
}

const switchBodyContent = ((e) => {
  domElements.content.childNodes[1].classList.add('slide-right');
  setTimeout(() => {
    // Remove old module
    domElements.content.childNodes[1].remove();

    // Create and insert new module
    domElements.content.insertBefore(
      pageLoad(siteData, e.target.dataset.index),
      domElements.content.childNodes[1]);

    // Apply css transition effects
    domElements.content.childNodes[1].classList.add('slide-left');
    setTimeout(() =>
      domElements.content.childNodes[1].classList.remove('slide-left'), 500);
  }, 1000);
});

// Initialize page
domElements.content.appendChild(navBar(siteData.pages));
domElements.content.appendChild(pageLoad(siteData, 0));
domElements.content.appendChild(footer(siteData));

// Module switching
const links = Array.from(document.querySelectorAll('li'));
links.unshift(document.querySelector('.logo'));
links.forEach(li => {
  li.addEventListener('click', switchBodyContent);
});

