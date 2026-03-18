const db = require("../db/connect");

class Player {
  constructor({ player_id, name, hand, current_rank }) {
    this.player_id = player_id;
    this.name = name;
    this.hand = hand;
    this.current_rank = current_rank;
  }

  // add methods

  static async getAllPlayers() {
    const response = await db.query(`SELECT * FROM players`);
    if (response.rows.length === 0) {
      throw new Error("no players found");
    }
    console.log("🎾", response);

    return response.rows;
  }

  static async getLeftHandedPlayers() {
    const response = await db.query(
      `SELECT * FROM players WHERE hand = 'Left'`,
    );

    console.log("🎾", response);
    return response.rows.map((p) => new Player(p));
  }

  static async getAllPlayersTitles() {
    const response = await db.query(
      `SELECT * FROM players INNER JOIN titles ON players.player_id = titles.player_id`,
    );
    if (response.rows.length === 0) {
      throw new Error("no players found");
    }

    console.log("🎾", response);
    return response.rows;
  }

  static async getAllPlayersTitlesCount() {
    const response = await db.query(
      "SELECT players.name, COUNT(titles.tournament_name) as tournament_wins FROM players INNER JOIN titles ON players.player_id = titles.player_id GROUP BY players.name",
    );
    console.log("🎾", response);
    return response.rows;
  }

  static async getPlayerTournament(pid, tournament_name) {
    const response = await db.query(
      `SELECT p.*, t.tournament_name, t.year
         FROM players p
         INNER JOIN titles t ON p.player_id = t.player_id
         WHERE p.player_id = $1 AND t.tournament_name = $2`,
      [pid, tournament_name],
    );

    console.log("🎾", response);
    return response.rows;
  }

  static async postNewPlayer(newPlayer) {
    const response = await db.query(
      "INSERT INTO players (name, hand, current_rank) VALUES ($1, $2, $3) RETURNING *;",
      newPlayer,
    );

    if (!response) {
      throw new Error("unable to add new player");
    }

    console.log("🎾", response);
    return response.rows[0];
  }

  static async deletePlayer(player_id) {
    const response = await db.query(
      "DELETE FROM players WHERE player_id = $1 RETURNING * ",
      [player_id],
    );

    if (response.rowCount === 0) {
      throw new Error("unable to delete player");
    }

    console.log("🎾", response);
    return response.rows[0];
  }

  static async updatePlayerRank(updatePlayer) {
    const response = await db.query(
      "UPDATE players SET current_rank = $2 WHERE player_id = $1 RETURNING *",
      updatePlayer,
    );

    if (response.rowCount === 0) {
      throw new Error("unable to update player");
    }

    console.log("🎾", response);
    return response.rows[0];
  }
}

module.exports = Player;
