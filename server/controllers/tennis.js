const Player = require("../models/Player");
const Title = require("../models/Title");

// make your async functions for the controller

async function getAllPlayers(req, res) {
  try {
    const players = await Player.getAllPlayers();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getLeftHandedPlayers(req, res) {
  try {
    const players = await Player.getLeftHandedPlayers();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getAllPlayersTitles(req, res) {
  try {
    const players = await Player.getAllPlayersTitles();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getAllPlayersTitlesCount(req, res) {
  try {
    const players = await Player.getAllPlayersTitlesCount();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getPlayerTournament(req, res) {
  const { player_id: pid, tournament_name } = req.params;
  const players = await Player.getPlayerTournament(pid, tournament_name);
  try {
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function postNewPlayer(req, res) {
  const { name, hand, current_rank } = req.body;
  const newPlayer = [name, hand, current_rank];
  try {
    const result = await Player.postNewPlayer(newPlayer);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deletePlayer(req, res) {
  const { player_id } = req.params;
  try {
    const result = await Player.deletePlayer(player_id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updatePlayerRank(req, res) {
  const { player_id, current_rank } = req.body;
  const updatePlayer = [player_id, current_rank];
  try {
    const result = await Player.updatePlayerRank(updatePlayer);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getAllPlayers,
  getLeftHandedPlayers,
  getAllPlayersTitles,
  getAllPlayersTitlesCount,
  getPlayerTournament,
  postNewPlayer,
  deletePlayer,
  updatePlayerRank,
};
