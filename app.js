// === STATE ===
let isDragging = false;
let activeBox = null;
let offsetX = 0;
let offsetY = 0;

// === DRAGGABLE FUNCTION ===
function makeDraggable(el) {
  el.addEventListener('mousedown', function(e) {
    isDragging = true;
    activeBox = el;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
    document.querySelectorAll('.popup').forEach(p => p.style.zIndex = "6");
    activeBox.style.zIndex = "10";
  });
}

// === POPUP FUNCTION ===
function makePopup(opsiId, popupId, exitId) {
  const opsi  = document.getElementById(opsiId);
  const popup = document.getElementById(popupId);
  const exit  = document.getElementById(exitId);

  makeDraggable(popup);

  opsi.addEventListener('click', function(e) {
    popup.style.display = 'block';
    const mainRect = document.getElementById('main').getBoundingClientRect();
    popup.style.display = 'block';
    popup.style.left = (e.clientX - mainRect.left - 200) + 'px';
    popup.style.top = (e.clientY - mainRect.top - 200) + 'px';
  });

  exit.addEventListener('click', function() {
    popup.style.display = 'none';
  });
}

// === GLOBAL MOUSE EVENTS ===
document.addEventListener('mousemove', function(e) {
  if (!isDragging || !activeBox) return;
  const mainRect = document.getElementById('main').getBoundingClientRect();
  activeBox.style.left = (e.clientX - mainRect.left - offsetX) + 'px';
  activeBox.style.top  = (e.clientY - mainRect.top - offsetY) + 'px';
});

document.addEventListener('mouseup', function() {
  isDragging = false;
  activeBox = null;
});

// === DAFTARKAN POPUP ===
makePopup("opsi1", "popup1", "exit1");
makePopup("opsi2", "popup2", "exit2");
makePopup("opsi3", "popup3", "exit3");
makePopup("opsi4", "popup4", "exit4");
makePopup("opsi5", "popup5", "exit5");
makePopup("opsi6", "popup6", "exit6");
makePopup("opsi7", "popup7", "exit7");
makePopup("opsi8", "popup8", "exit8");
makePopup("opsi9", "popup9", "exit9");



