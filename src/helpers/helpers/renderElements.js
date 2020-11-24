const renderLinks = ((links) => {
  const ul = document.createElement('ul');
  links.forEach(link => {
    if (link.title != 'Home') {
      let li = document.createElement('li');
      li.textContent = link.title;
      li.setAttribute('data-index', link.index);
      ul.appendChild(li);
    }
  });

  return ul;
});

const renderCol = ((colContent) => {
  const elements = Object.keys(colContent);
  const col = document.createElement('div');
  col.classList.add('col');
  elements.forEach(el => {
    col.appendChild(colContent[el].renderElement());
  })

  return col;
});

export {
  renderLinks,
  renderCol,
}