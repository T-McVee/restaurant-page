import { renderLinks } from './helpers/renderElements'

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

export { navBar };