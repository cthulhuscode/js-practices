(async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/231");
  const { name, species } = await response.json();
  console.log(`Name: ${name}, Species: ${species}`);
})();
