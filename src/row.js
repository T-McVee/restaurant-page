function row(rowContent, rowName) {
  const keys = Object.keys(rowContent);
  console.log(rowContent);

  const _col = (colContent) => {
    const elements = Object.keys(colContent);
    const col = document.createElement('div');
    col.classList.add('col');
    elements.forEach(el => {
      el != 'img'
        ? col.appendChild(_renderText(colContent[el], el))
        : col.appendChild(_renderImg(colContent[el]))
    })

    return col;
  }

  const _renderImg = (url) => {
    const img = document.createElement('div');
    img.classList.add('img');
    img.style.backgroundImage = url;

    return img;
  }

  const _renderText = (input, type) => {
    let text;
    type === 'h1' ? text = _h1(input)
      : type === 'h2' ? text = _h2(input)
        : type === 'subtitle' ? text = _span(input)
          : type === 'button' ? text = _button(input)
            : text = _p(input);

    return text;
  }

  const _h1 = (content) => {
    const h1 = document.createElement('h1');
    h1.textContent = content;
    return h1;
  }

  const _h2 = (content) => {
    const h2 = document.createElement('h2');
    h2.textContent = content;
    return h2;
  }

  const _span = (content) => {
    const span = document.createElement('span');
    span.textContent = content;
    return span;
  }

  const _button = (content) => {
    const btn = document.createElement('a');
    btn.classList.add('btn');
    btn.textContent = content.text;
    btn.setAttribute('href', content.url);
    return btn;
  }

  const _p = (content) => {
    const p = document.createElement('p');
    p.textContent = content;

    return p;
  }

  const row = document.createElement('div');
  row.classList.add(rowName);
  row.classList.add('row');
  keys.forEach(key => {
    row.appendChild(_col(rowContent[key]));
  });

  return row;
};

export { row };