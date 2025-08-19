const toggleTheme = () => {
  const main = document.querySelector('main');
  const toggleBtn = document.querySelector('.toggle-btn');
  const unitConverters = document.querySelectorAll('.unit-converter');
  const ps = document.querySelectorAll('p');
  toggleBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
    main.classList.toggle('light');

    toggleBtn.textContent = main.classList.contains('dark')
      ? 'Light mode'
      : 'Dark mode';

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

const converter = () => {
  const input = document.querySelector('.number');
  const btn = document.querySelector('.btn-converter');
  const lengthP = document.querySelector('.unit-converter:nth-child(1) p');
  const volumeP = document.querySelector('.unit-converter:nth-child(2) p');
  const massP = document.querySelector('.unit-converter:nth-child(3) p');

  btn.addEventListener('click', () => {
    const value = +input.value || 0;

    const metersToFeet = (value * 3.281).toFixed(2);
    const feetToMeters = (value / 3.281).toFixed(2);
    lengthP.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

    const litersToGallons = (value * 0.264).toFixed(2);
    const gallonsToLiters = (value / 0.264).toFixed(2);
    volumeP.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

    const kgsToLbs = (value * 2.204).toFixed(2);
    const lbsToKgs = (value / 2.204).toFixed(2);
    massP.textContent = `${value} kilograms = ${kgsToLbs} pounds | ${value} pounds = ${lbsToKgs} kilograms`;
  });
};

const init = () => {
  toggleTheme();
  converter();
};

init();
