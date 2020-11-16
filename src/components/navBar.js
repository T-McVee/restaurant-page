import { _renderLinks } from './helpers/renderElements'

const navBar = ((pages) => {

  const _createLogo = () => {
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'LePizz';

    return logo;
  }

  const navBar = document.createElement('nav');
  navBar.appendChild(_createLogo());
  navBar.appendChild(_renderLinks(pages));

  return navBar;
});

export { navBar };