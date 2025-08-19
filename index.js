const toggleTheme = () => {
  const main = document.querySelector('main');
  const toggleBtn = document.querySelector('.toggle-btn');
  const unitConverters = document.querySelectorAll('.unit-converter');
  const ps = document.querySelectorAll('p');
  toggleBtn.addEventListener('click', () => {
    main.classList.toggle('dark');

    main.classList.contains('dark')
      ? (toggleBtn.textContent = 'Light mode')
      : (toggleBtn.textContent = 'Dark mode');

    unitConverters.forEach((box) => {
      box.classList.toggle('dark');
      box.classList.toggle('light');

      ps.forEach((p) => {
        p.classList.toggle('dark');
        p.classList.toggle('light');
      });
    });
  });
};

const init = () => {
  toggleTheme();
};

init();
