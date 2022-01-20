const people = [
    { name: 'emma', job: 'actor' },
    { name: 'harry', job: 'hero' },
    { name: 'hermoine', job: 'the boss' },
  ];

  const container = document.querySelector('.container');
  const btn = document.querySelector('.btn');
  
  const showPeople = () => {
    const newPeople = people
      .map((person) => {
        const { name, job } = person;
        return `<p>${name} <strong>${job}</strong></p>`;
      })
      .join('');
    container.innerHTML = newPeople;
  };
  
  btn.addEventListener('click', () => {
    showPeople();
  });
  