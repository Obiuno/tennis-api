const { Router } = require("express");
const tennisController = require("../controllers/tennis");

// router instance

const tennisRouter = Router();

// set up paths for controller to get

// Players
tennisRouter.get("/players", tennisController.getAllPlayers);
tennisRouter.get("/players/left", tennisController.getLeftHandedPlayers); // get left handed players

// specific join endpoints
tennisRouter.get("/players/titles", tennisController.getAllPlayersTitles); // get players and their titles
tennisRouter.get(
  "/players/titles/count",
  tennisController.getAllPlayersTitlesCount,
); //get all players and their titles, order it

// parameter routes
tennisRouter.get(
  "/players/:player_id/titles/:tournament_name",
  tennisController.getPlayerTournament,
); // get players by player_id for specific title by title_id

// different requests
tennisRouter.post("/players", tennisController.postNewPlayer); // add a new player

tennisRouter.patch("/players", tennisController.updatePlayerRank); //update a players rank by player_id
tennisRouter.delete("/players/:player_id", tennisController.deletePlayer); //delete player

/*
// Titles
tennisRouter.get("/titles"); // get all titles
tennisRouter.post("/titles"); // add a title for a player


//always do explicit and short first
/* others to do
tennisRouter.get("/players/titles/count/:num"); // get players (player_id) titles in a specific year
tennisRouter.get("/players/titles/year/:year"); // get player (player_id) won in a specific year

tennisRouter.get("/players/:player_id/titles"); //players by player_id and their title count
tennisRouter.get("/players/:player_id"); // get specific player by player_id

tennisRouter.get("/titles/:title_id"); //get specific title by title_id
tennisRouter.delete("/titles/:title_id"); // delete a title by title_id
*/

/*
Get a player with all their titles
Get all players with their title count (most decorated first)
Get all titles for a specific tournament
Get all Grand Slam winners (if you seed that data)
Get players who have won more than X titles
Get titles won in a specific year
*/

// export
module.exports = tennisRouter;
