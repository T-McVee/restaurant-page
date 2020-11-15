import { navBar } from './navBar'
import { row } from './row.js'

const pageLoad = ((pages, index, target) => {
  const _init = (() => {
    let sections = Object.keys(pages[index].content);
    target.appendChild(navBar(pages));
    sections.forEach(section => {
      if (section != 'footer') {
        target.appendChild(row(pages[index].content[section], section));
      }
    });
  })();
});

export { pageLoad };