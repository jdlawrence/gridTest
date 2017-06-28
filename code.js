var columns = document.getElementsByClassName('column');
console.log(columns);

for (var i = 0; i < columns.length; i++) {
  columns[i].classList.add('col-1-4');
}