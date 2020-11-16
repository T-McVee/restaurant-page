import { _renderText, _renderLinks, _renderCol } from './helpers/renderElements'

const footer = ((siteContent) => {
  const columns = Object.keys(siteContent.footer);


  const footer = document.createElement('footer');
  const col = document.createElement('div');
  col.classList.add('col');
  col.appendChild(_renderLinks(siteContent.pages));
  footer.appendChild(col);

  columns.forEach(col => {
    footer.appendChild(_renderCol(siteContent.footer[col]))
  });

  return footer;
});

export { footer };