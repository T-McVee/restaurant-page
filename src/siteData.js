import { Loader } from '@googlemaps/js-api-loader'

// Class for each type of DOM element. 
// Render methods define how each class will apear in DOM

class ImgEl {
  constructor(content) {
    this.content = content;
  }

  renderElement() {
    const img = document.createElement('div');
    img.classList.add('img');
    img.style.backgroundImage = this.content;

    return img;
  }
}

class BtnEl {
  constructor(content) {
    this.content = content;
  }

  renderElement() {
    const btn = document.createElement('a');
    btn.classList.add('btn');
    btn.textContent = this.content.text;
    btn.setAttribute('data-index', this.content.index);

    return btn;
  }
}

class TextEl {
  constructor(content, type) {
    this.content = content;
    this.type = type;
  }

  renderElement() {
    const textElement = document.createElement(this.type.match(/^h[123456]|[^0-9]+/));
    textElement.textContent = this.content;

    return textElement;
  }
}

class MapEl {
  constructor() { }

  renderElement() {
    const mapEl = document.createElement('div');
    mapEl.id = 'map';
    let map;

    const loader = new Loader({
      apiKey: '',
      version: 'weekly'
    });
    loader.load().then(() => {
      map = new google.maps.Map(mapEl, {
        center: { lat: 49.285, lng: -123.12 },
        zoom: 14,
      });
    });
    return mapEl;
  }
}

class IconEl {
  constructor(content) {
    this.content = content;
  }

  renderElement() {
    const icon = document.createElement('i');
    this.content.classes.forEach(ic => icon.classList.add(ic));
    const link = document.createElement('a');
    link.setAttribute('href', this.content.url);
    link.setAttribute('target', this.content.target);
    link.appendChild(icon);

    return link
  }
}

class ListEl {
  constructor(content) {
    this.content = content;
  }

  renderElement() {
    const ul = document.createElement('ul');
    let lis = Object.keys(this.content);
    lis.forEach(li => {
      const newLi = document.createElement('li');
      newLi.textContent = this.content[li];
      ul.appendChild(newLi);
    });

    return ul;
  }
}

// Define content for site pages
const siteData = {
  pages: [
    {
      index: 0, title: 'Home', url: '#', content:
      {
        deco: {},
        splash: {
          col1: {
            h1: new TextEl('Welcome To LePizz', 'h1'),
            span: new TextEl('Authentic flavours | Localy sourced', 'span'),
            p: new TextEl('Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.', 'p'),
            button: new BtnEl({
              text: 'Menu',
              index: 1
            })
          },
          col2: {
            img: new ImgEl('url(img/pizza-oven.jpg)')
          },
        },
        valueProps: {
          col1: {
            img: new ImgEl('url(img/pizza.png)'),
            h2: new TextEl('Tasty Pizza', 'h2'),
            span: new TextEl('Enough said right?', 'span')
          },
          col2: {
            img: new ImgEl('url(img/wine.png)'),
            h2: new TextEl('Curated wine selection', 'h2'),
            span: new TextEl('Hand selected wines, picked by our inhouse sommelier', 'span')
          },
          col3: {
            img: new ImgEl('url(img/waiter.png)'),
            h2: new TextEl('Amazing service', 'h2'),
            span: new TextEl('Experience a true Itallian delight', 'span')
          },
        },
      }
    },
    {
      index: 1, title: 'Menu', url: '#', content: {
        lunchTitle: {
          col1: {
            sitting: new TextEl('Lunch', 'h2'),
            time: new TextEl('11:30am - 4:00pm', 'div')
          }
        },
        lunchItems: {
          col1: {
            name: new TextEl('Margarita', 'h2'),
            description: new TextEl('cheese, basil, love', 'p'),
            price: new TextEl('14', 'span')
          },
          col2: {
            name: new TextEl('Quatro Fomage', 'h2'),
            description: new TextEl('Artichoke, Mozzerella, Basil, rich tomato sauce', 'p'),
            price: new TextEl('16', 'span'),
          },
          col3: {
            name: new TextEl('Anchovy & Onion', 'h2'),
            description: new TextEl('All the shrooms, spicy peperoni, rich tomato sauce', 'p'),
            price: new TextEl('20', 'span')
          }
        },
        dinnerTitle: {
          col1: {
            sitting: new TextEl('Dinner', 'h2'),
            time: new TextEl('4:00pm - close', 'div')
          }
        },
        dinnerItems: {
          col1: {
            name: new TextEl('Margarita', 'h2'),
            description: new TextEl('cheese, basil, love', 'p'),
            price: new TextEl('14', 'span')
          },
          col2: {
            name: new TextEl('Capricosa', 'span'),
            description: new TextEl('Artichoke, Mozzerella, Basil, rich tomato sauce', 'span'),
            price: new TextEl('16', 'span')
          },
          col3: {
            name: new TextEl('Al Fungi', 'h2'),
            description: new TextEl('All the shrooms, spicy peperoni, rich tomato sauce', 'p'),
            price: new TextEl('20', 'span')
          }
        }
      }
    },
    {
      index: 2, title: 'About', content: {
        intro: {
          col1: {
            img: new ImgEl('url(img/pizza-oven.jpg)')
          },
          col2: {
            h2: new TextEl('For the love of pizza', 'h2'),
            p: new TextEl('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in eaque vel assumenda, facilis ipsam. Incidunt recusandae quibusdam ab, ad quod sint accusamus. Corporis accusamus repellat error animi nisi ipsam veritatis praesentium in tempore nam repellendus ipsum, suscipit perferendis fugiat!', 'p')
          }
        }
      }
    },
    {
      index: 3, title: 'Contact', content: {
        address: {
          col1: {
            title: new TextEl('Address', 'h3'),
            street: new TextEl('123 Fake Street', 'div'),
            city: new TextEl('Vancouver, BC', 'div'),
            zip: new TextEl('V06 0E1', 'div')
          },
          col2: {
            map: new MapEl()
          }
        },
        hours: {
          col1: {
            title: new TextEl('Hours', 'h3'),
            mon: new TextEl('Monday: 12:00 - 22:00', 'span'),
            tues: new TextEl('Tuesday: 12:00 - 22:00', 'span'),
            wed: new TextEl('Wednesday: 12:00 - 22:00', 'span'),
            thurs: new TextEl('Thursday: 12:00 - 22:00', 'span'),
            fri: new TextEl('Friday: 12:00 - 23:30', 'span'),
            sat: new TextEl('Saturday: 12:00 - 23:30', 'span'),
            sun: new TextEl('Sunday: 12:00 - 23:30', 'span')
          },
          col2: {
            title: new TextEl('Contact Us', 'h3'),
            ul: new ListEl({
              li1: 'p: 123-456-7890',
              li2: 'e: lepizz@notarealemail.com'
            })
          }
        }

      }
    }
  ],
  footer: {
    col2: {
      span: new TextEl(`Created by T-McVee `, 'span'),
      i: new IconEl({
        classes: ['fab', 'fa-github', 'fa-lg'],
        url: 'https://github.com/T-McVee',
        target: 'blank'
      })
    },
    col3: {
      span: new TextEl('Icons made by Freepik from www.flaticon.com', 'span')
    }
  }
}

export { siteData };