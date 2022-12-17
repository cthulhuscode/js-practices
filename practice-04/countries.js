(async () => {
  const getCountriesBySpokenLang = async (lang) => {
    const response = await fetch(`https://restcountries.com/v3.1/lang/${lang}`);
    const data = await response.json();
    const countries = data.map((country) => country.name.common);
    return countries;
  };

  console.log(await getCountriesBySpokenLang("spa"));
})();
