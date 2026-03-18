const Registry = {
  players: {
    table: "players",
    primaryKey: "player_id",
    columns: ["player_id", "name", "hand", "current_rank"],
    insertableColumns: ["name", "hand", "current_rank"],
    constraints: {
      hand: ["Right", "Left"],
    },
    relationships: {
      titles: {
        table: "titles",
        foreignKey: "player_id",
      },
    },
  },
  titles: {
    table: "titles",
    primaryKey: "id",
    columns: ["id", "player_id", "tournament_name", "year"],
    insertableColumns: ["player_id", "tournament_name", "year"],
    relationships: {
      players: {
        table: "players",
        foreignKey: "player_id",
      },
    },
  },
};

const Limit = { default: 50 };

module.exports = { Registry, Limit };
