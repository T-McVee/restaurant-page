import { navBar } from './components/navBar'
import { row } from './components/row'
import { footer } from './components/footer'

const pageLoad = ((pageContent, index, target) => {
  let sections = Object.keys(pageContent.pages[index].content);

  target.appendChild(navBar(pageContent.pages));
  sections.forEach(section => {
    if (section != 'footer') {
      target.appendChild(row(pageContent.pages[index].content[section], section));
    }
  });
  target.appendChild(footer(pageContent));
});

export { pageLoad };