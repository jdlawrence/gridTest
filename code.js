var columns = document.getElementsByClassName('column');

function applyClassToColumns (newClass) {

  for (var i = 0; i < columns.length; i++) {
    columns[i].classList.add(newClass);
  }
}

var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

if (width < 360) {
  applyClassToColumns('col-1-1');
} else if (width < 720) {
  applyClassToColumns('col-1-2');
} else {
  applyClassToColumns('col-1-4');
}
alert(width + ':' + height);