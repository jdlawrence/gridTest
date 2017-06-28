
function resize() {
  function applyClassToColumns(newClass) {
    for (var i = 0; i < columns.length; i++) {
      // Must remove old classes first
      columns[i].classList.remove('col-1-1', 'col-1-2', 'col-1-4');
      columns[i].classList.add(newClass);
    }
  }

  var columns = document.getElementsByClassName('column');

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
}

// Call resize when the window first loads
resize();

window.onresize = resize;