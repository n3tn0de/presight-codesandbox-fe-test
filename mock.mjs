import express from "express";
import langs from "i18n-iso-countries/langs/en.json" with { type: 'json' };
import countries from "i18n-iso-countries";
countries.registerLocale(langs);
const list = Object.values(countries.getNames("en", { select: "official" }));

const app = express();

const endpoints = {
  countries: "/api/countries"
}

const headers = {
  "Access-Control-Allow-Origin": "*"
}

app.get("/", (req, res) => {
  res.redirect(endpoints.countries)
})

app.get(endpoints.countries, (req, res) => {
  const { q } = req.query;
  console.log({q})
  res.set(headers);
  if (q) {
    const resList = list
      .filter((country) => country.toLowerCase().includes(q.toLowerCase()))
      .slice(0, 10);
    console.log({resList})
    res.json(resList);
    return
  }
  res.status(404).send();
});

app.listen(3000);
