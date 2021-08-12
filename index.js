const app = require("express");
const app = express();

var db = {
  games: [
    {
      id: 23,
      title: "Call of Duty",
      year: 2019,
      price: 60,
    },
    {
      id: 24,
      title: "Mario Bros",
      year: 1996,
      price: 30,
    },
    {
      id: 24,
      title: "Crysis",
      year: 2009,
      price: 90,
    },
  ],
};

app.listen(8000, () => {
  console.log("Api rodando na porta 8000");
});
