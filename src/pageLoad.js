import { row } from './components/row'

const pageLoad = ((pageContent, index) => {
  let sections = Object.keys(pageContent.pages[index].content);

  const tabContent = document.createElement('div');
  tabContent.classList.add('module');
  tabContent.classList.add(pageContent.pages[index].title.toLowerCase());
  sections.forEach(section => {
    if (section != 'footer') {
      tabContent.appendChild(row(pageContent.pages[index].content[section], section));
    }
  });

  return tabContent;
});

export { pageLoad };