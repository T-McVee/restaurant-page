function navBar(pages) {

  const _createLogo = () => {
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'LePizz';
    return logo;
  }

  const _createLinks = (links) => {
    const ul = document.createElement('ul');
    links.forEach(link => {
      if (link.title != 'Home') {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = link.title;
        a.setAttribute('href', link.url);
        li.appendChild(a);
        ul.appendChild(li);
      }
    });
    return ul;
  }

  const navBar = document.createElement('nav');
  navBar.appendChild(_createLogo());
  navBar.appendChild(_createLinks(pages));
  return navBar;
}

export { navBar };