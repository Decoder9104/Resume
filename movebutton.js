const moveableButton = document.getElementById('.this move')
let isDragging = false;
let offsetX, offsetY;

// Function to handle mouse or touch start event
function startDrag(event) {
  isDragging = true;
  if (event.type === 'mousedown') {
    offsetX = event.clientX - moveableButton.getBoundingClientRect().left;
    offsetY = event.clientY - moveableButton.getBoundingClientRect().top;
  } else if (event.type === 'touchstart') {
    offsetX = event.touches[0].clientX - moveableButton.getBoundingClientRect().left;
    offsetY = event.touches[0].clientY - moveableButton.getBoundingClientRect().top;
  }
}

// Function to handle mouse or touch move event
function drag(event) {
  if (isDragging) {
    event.preventDefault();
    let x, y;
    if (event.type === 'mousemove') {
      x = event.clientX - offsetX
      y = event.clientY - offsetY;
    } else if (event.type === 'touchmove') {
      x = event.touches[0].clientX - offsetX;
      y = event.touches[0].clientY - offsetY;
    }
    moveableButton.style.left = `${x}px`;
    moveableButton.style.top = `${y}px`;
  }
}

// Function to handle mouse or touch end event
function endDrag() {
  isDragging = false;
}

// Event listeners for mouse and touch events
moveableButton.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

moveableButton.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', endDrag);



