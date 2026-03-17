const db = require("../db/connect");

class Title {
  constructor({ id, player_id, tournament_name, year }) {
    this.id = id;
    this.player_id = player_id;
    this.tournament_name = tournament_name;
    this.year = year;
  }

  // add methods
}

module.exports = Title;
