const express = require("express");
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

app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(db.games);
});

app.get("/game/:id", (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(id);

    var game = db.games.find((g) => g.id === id);

    if (game != undefined) {
      res.statusCode = 200;
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post("/game", (req, res) => {
  var { title, price, year } = req.body;

  db.games.push({
    id: 30,
    title,
    price,
    year,
  });

  res.sendStatus(200);
});

app.delete("/game/:id", (req, res) => {
  var id = req.params.id;
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(id);
    var index = db.games.findIndex((g) => g.id == id);

    if (index == -1) {
      res.sendStatus(404);
    } else {
      db.games.splice(index, 1);
      res.sendStatus(200);
    }
  }
});

app.put("/game/:id", (req, res) => {
  var id = req.params.id;
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    var id = parseInt(id);

    var game = db.games.find((g) => g.id == id);

    if (game != undefined) {
      var { title, price, year } = req.body;

      if (title != undefined) {
        game.title = title;
      }

      if (price != undefined) {
        game.price = price;
      }

      if (year != undefined) {
        game.year = year;
      }

      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  }
});

app.listen(8000, () => {
  console.log("Api rodando na porta 8000");
});
