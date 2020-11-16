import { _h1, _h2, _p, _span, _button } from './elements'

const _renderImg = ((url) => {
  const img = document.createElement('div');
  img.classList.add('img');
  img.style.backgroundImage = url;

  return img;
});

const _renderText = ((input, type) => {
  let text;
  type === 'h1' ? text = _h1(input)
    : type === 'h2' ? text = _h2(input)
      : type === 'subtitle' || type.match(/text/ig) ? text = _span(input)
        : type === 'button' ? text = _button(input)
          : text = _p(input);

  return text;
});

const _renderLinks = ((links) => {
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
});

const _renderCol = ((colContent) => {
  const elements = Object.keys(colContent);
  const col = document.createElement('div');
  col.classList.add('col');
  elements.forEach(el => {
    el != 'img'
      ? col.appendChild(_renderText(colContent[el], el))
      : col.appendChild(_renderImg(colContent[el]))
  })

  return col;
});

export {
  _renderImg,
  _renderText,
  _renderLinks,
  _renderCol
}