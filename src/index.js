import { siteData } from './siteData'
import { navBar, footer } from './components'
import { pageLoad } from './pageLoad'

const domElements = {
  content: document.querySelector('#content')
};

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
const init = (() => {
  domElements.content.appendChild(navBar(siteData.pages));
  domElements.content.appendChild(pageLoad(siteData, 0));
  domElements.content.appendChild(footer(siteData));
})();

// Module switching for links
const links = Array.from(document.querySelectorAll('li'));
links.unshift(document.querySelector('.logo'));
links.forEach(li => li.addEventListener('click', switchBodyContent));

// Module switching for buttons
const btns = Array.from(document.querySelectorAll('.btn'));
btns.forEach(btn => btn.addEventListener('click', switchBodyContent));