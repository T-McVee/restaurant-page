import { footer } from './components/footer';
import { navBar } from './components/navBar'
import { pageLoad } from './pageLoad'

const domElements = {
  content: document.querySelector('#content')
};

// Object containing content for all pages
const siteData = {
  pages: [
    {
      index: 0, title: 'Home', url: '#', content:
      {
        deco: {},
        splash: {
          col1: {
            h1: 'Welcome To LePizz',
            span: 'Authentic flavours | Localy sourced',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.',
            /* button: {
              text: 'Menu',
              index: 1
            }, */
          },
          col2: {
            img: 'url(/img/pizza-oven.jpg)'
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
            span: 'Hand selected wines, picked by our inhouse sommelier'
          },
        },
      }
    },
    {
      index: 1, title: 'Menu', url: '#', content: {
        lunchTitle: {
          col1: {
            h2: 'Lunch',
            div: '11:30am - 4:00pm'
          }
        },
        lunchItems: {
          col1: {
            h2: 'Margarita',
            p: 'cheese, basil, love',
            price: '14'
          },
          col2: {
            h2: 'Quatro Fomage',
            p: 'Artichoke, Mozzerella, Basil, rich tomato sauce',
            price: '16'
          },
          col3: {
            h2: 'Anchovy & Onion',
            p: 'All the shrooms, spicy peperoni, rich tomato sauce',
            price: '20'
          }
        },
        dinnerTitle: {
          col1: {
            h2: 'Dinner',
            div: '4:00pm - close'
          }
        },
        dinnerItems: {
          col1: {
            h2: 'Margarita',
            p: 'cheese, basil, love',
            price: '14'
          },
          col2: {
            h2: 'Capricosa',
            p: 'Artichoke, Mozzerella, Basil, rich tomato sauce',
            price: '16'
          },
          col3: {
            h2: 'Al Fungi',
            p: 'All the shrooms, spicy peperoni, rich tomato sauce',
            price: '20'
          }
        }
      }
    },
    {
      index: 2, title: 'About', content: {
        intro: {
          col1: {
            img: 'url(../img/pizza-oven.jpg)'
          },
          col2: {
            h2: 'For the love of pizza',
            p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in eaque vel assumenda, facilis ipsam. Incidunt recusandae quibusdam ab, ad quod sint accusamus. Corporis accusamus repellat error animi nisi ipsam veritatis praesentium in tempore nam repellendus ipsum, suscipit perferendis fugiat!'
          }
        }
      }
    },
    {
      index: 3, title: 'Contact', content: {
        address: {
          col1: {
            h3: 'Address',
            div2: '123 Fake Street',
            div3: 'Vancouver, BC',
            div4: 'V06 0E1'
          },
          col2: {
            map: {}
          }
        },
        hours: {
          col1: {
            h3: 'Hours',
            span: 'Monday: 12:00 - 22:00',
            span: 'Tuesday: 12:00 - 22:00',
            wed: 'Wednesday: 12:00 - 22:00',
            thurs: 'Thursday: 12:00 - 22:00',
            fri: 'Friday: 12:00 - 23:30',
            sat: 'Saturday: 12:00 - 23:30',
            sun: 'Sunday: 12:00 - 23:30',
          },
          col2: {
            h3: 'Contact Us',
            ul: {
              li1: 'p: 123-456-7890',
              li2: 'e: lepizz@notarealemail.com'
            }
          }
        }

      }
    }
  ],
  footer: {
    col2: {
      span: `Created by T-McVee `,
      i: {
        classes: ['fab', 'fa-github', 'fa-lg'],
        url: 'https://github.com/T-McVee',
        target: 'blank'
      }
    },
    col3: {
      span: 'Icons made by Freepik from www.flaticon.com',
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

// Module switching for links
const links = Array.from(document.querySelectorAll('li'));
links.unshift(document.querySelector('.logo'));
links.forEach(li => li.addEventListener('click', switchBodyContent));

// Module switching for buttons
const btns = Array.from(document.querySelectorAll('.btn'));
btns.forEach(btn => btn.addEventListener('click', switchBodyContent));

