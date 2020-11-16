import { _renderText, _renderImg, _renderCol } from './helpers/renderElements'


const row = ((rowContent, rowName) => {
  const columns = Object.keys(rowContent);

  const row = document.createElement('div');
  row.classList.add(rowName);
  row.classList.add('row');
  columns.forEach(col => {
    row.appendChild(_renderCol(rowContent[col]));
  });

  return row;
});

export { row };