const renderImg = ((url) => {
  const img = document.createElement('div');
  img.classList.add('img');
  img.style.backgroundImage = url;

  return img;
});

const renderBtn = ((content) => {
  const btn = document.createElement('a');
  btn.classList.add('btn');
  btn.textContent = content.text;
  btn.addEventListener('click', () => {
  });

  return btn;
})

const renderText = ((content, type) => {
  const textElement = document.createElement(type.match(/^h[123456]|[^0-9]+/));
  textElement.textContent = content;
  return textElement;
});

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
    el === 'img'
      ? col.appendChild(renderImg(colContent[el]))
      : el === 'button'
        ? col.appendChild(renderBtn(colContent[el]))
        : col.appendChild(renderText(colContent[el], el))

  });

  return col;
});

export {
  renderImg,
  renderText,
  renderLinks,
  renderCol
}