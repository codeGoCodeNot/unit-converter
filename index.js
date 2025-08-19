const toggleTheme = () => {
  const main = document.querySelector('main');
  const toggleBtn = document.querySelector('.toggle-btn');
  toggleBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
    toggleBtn.classList.toggle('dark');

    toggleBtn.classList.contains('dark');

    main.classList.contains('dark')
      ? (toggleBtn.textContent = 'Light mode')
      : (toggleBtn.textContent = 'Dark mode');
  });
};

toggleTheme();
