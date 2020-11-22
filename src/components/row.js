import { _renderText, _renderImg, _renderCol } from './helpers/renderElements'

const _camelToKebabCase = ((camel) => {
  let lowercase = camel.split(/[A-Z]/g);
  let letter = camel.match(/[A-Z]/g);

  if (letter) {
    for (let i = 0; i < letter.length; i++) {
      letter[i] += lowercase[i + 1];
      lowercase[i + 1] = letter;
    }
    return lowercase.join('-').toLowerCase();
  }
});

const row = ((rowContent, rowName) => {
  const columns = Object.keys(rowContent);
  const row = document.createElement('div');
  row.classList.add(_camelToKebabCase(rowName));
  row.classList.add('row');
  columns.forEach(col => {
    row.appendChild(_renderCol(rowContent[col]));
  });

  return row;
});

export { row };

// If uppercase add '-' before
  // return new string in lowercase