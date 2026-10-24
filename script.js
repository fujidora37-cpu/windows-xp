const windows = document.querySelectorAll('[data-window]');
const taskButtons = document.querySelectorAll('.task-button');
const deskIcons = document.querySelectorAll('.desk-icon');
const menuItems = document.querySelectorAll('.menu-item');
const startButton = document.querySelector('.start-button');
const startMenu = document.getElementById('startMenu');
const clock = document.getElementById('clock');

function showWindow(id) {
  const target = document.getElementById(id);
  if (!target) return;

  windows.forEach((win) => {
    if (win.id === id) {
      win.classList.add('active');
    } else {
      win.classList.remove('active');
    }
  });

  taskButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.window === id);
  });
}

function hideWindow(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.remove('active');

  taskButtons.forEach((button) => {
    if (button.dataset.window === id) button.classList.remove('active');
  });
}

function toggleStartMenu() {
  startMenu.classList.toggle('open');
}

deskIcons.forEach((icon) => {
  icon.addEventListener('click', () => showWindow(icon.dataset.window));
});

taskButtons.forEach((button) => {
  button.addEventListener('click', () => showWindow(button.dataset.window));
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    showWindow(item.dataset.window);
    startMenu.classList.remove('open');
  });
});

startButton.addEventListener('click', toggleStartMenu);

document.addEventListener('click', (event) => {
  if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
    startMenu.classList.remove('open');
  }
});

document.querySelectorAll('.close').forEach((button) => {
  button.addEventListener('click', () => {
    const windowEl = button.closest('.window');
    if (windowEl) hideWindow(windowEl.id);
  });
});

document.querySelectorAll('.minimize').forEach((button) => {
  button.addEventListener('click', () => {
    const windowEl = button.closest('.window');
    if (windowEl) hideWindow(windowEl.id);
  });
});

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  clock.textContent = time;
}

updateClock();
setInterval(updateClock, 1000 * 30);

showWindow('computer');



































