import { renderLinks } from './helpers/helpers/renderElements'
import { renderCol } from './helpers/helpers/renderElements'

const _camelToKebabCase = ((camel) => {
  let kebabCase = camel;
  let lowercase = camel.split(/[A-Z]/g);
  let letter = camel.match(/[A-Z]/g);
  if (letter) {
    for (let i = 0; i < letter.length; i++) {
      letter[i] += lowercase[i + 1];
      lowercase[i + 1] = letter;
    }
    kebabCase = lowercase.join('-').toLowerCase();
  }
  return kebabCase;
});

const navBar = ((pages) => {

  const _createLogo = () => {
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'LePizz';
    logo.setAttribute('data-index', pages[0].index);

    return logo;
  }

  const navBar = document.createElement('nav');
  navBar.appendChild(_createLogo());
  navBar.appendChild(renderLinks(pages));

  return navBar;
});

const row = ((rowContent, rowName) => {
  const columns = Object.keys(rowContent);
  const row = document.createElement('div');
  row.classList.add(_camelToKebabCase(rowName));
  row.classList.add('row');
  columns.forEach(col => {
    row.appendChild(renderCol(rowContent[col]));
  });

  return row;
});

const footer = ((siteContent) => {
  const columns = Object.keys(siteContent.footer);


  const footer = document.createElement('footer');
  const col = document.createElement('div');
  col.classList.add('col');
  col.appendChild(renderLinks(siteContent.pages));
  footer.appendChild(col);

  columns.forEach(col => {
    footer.appendChild(renderCol(siteContent.footer[col]))
  });

  return footer;
});

export {
  navBar,
  row,
  footer
};