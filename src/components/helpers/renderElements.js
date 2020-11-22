import { Loader } from '@googlemaps/js-api-loader'

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
  btn.setAttribute('data-index', content.index);
  //btn.addEventListener('click', content.action);

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

const _renderMap = (() => {
  const mapEl = document.createElement('div');
  mapEl.id = 'map';
  let map;

  const loader = new Loader({
    apiKey: '',
    version: 'weekly'
  });
  loader.load().then(() => {
    map = new google.maps.Map(mapEl, {
      center: { lat: 49.285, lng: -123.12 },
      zoom: 14,
    });
  });
  return mapEl;
});

const _renderIcon = ((iconData) => {
  const icon = document.createElement('i');
  iconData.classes.forEach(ic => icon.classList.add(ic));
  const link = document.createElement('a');
  link.setAttribute('href', iconData.url);
  link.appendChild(icon);

  return link
})

const renderCol = ((colContent) => {
  const elements = Object.keys(colContent);

  const col = document.createElement('div');
  col.classList.add('col');
  elements.forEach(el => {
    el === 'img'
      ? col.appendChild(renderImg(colContent[el]))
      : el === 'button'
        ? col.appendChild(renderBtn(colContent[el]))
        : el === 'map'
          ? col.appendChild(_renderMap())
          : el === 'i'
            ? col.appendChild(_renderIcon(colContent[el]))
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