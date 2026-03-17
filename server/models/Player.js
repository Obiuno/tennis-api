const db = require("../db/connect")

class Player {
    constructor({player_id, name, hand, current_rank}) {
        this.player_id = player_id
        this.name = name
        this.hand = hand
        this.current_rank = current_rank
    }

    // add methods
}

module.exports = Player