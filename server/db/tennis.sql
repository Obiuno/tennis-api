DROP TABLE IF EXISTS titles;
DROP TABLE IF EXISTS players;

-- Create players table
CREATE TABLE players (
    player_id INT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    hand TEXT CHECK (hand IN ('Right', 'Left')),
    current_rank INTEGER,
    PRIMARY KEY(player_id)
);

--Create titles table
CREATE TABLE titles (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    player_id INT,
    tournament_name VARCHAR(50),
    year INT,
    CONSTRAINT fk_players FOREIGN KEY(player_id) REFERENCES players(player_id)
);

-- Insert Players
INSERT INTO players (name, hand, current_rank) VALUES 
('Carlos Alcaraz', 'Right', 3),
('Rafael Nadal', 'Left', 150),
('Iga Świątek', 'Right', 1),
('Novak Djokovic', 'Right', 1),
('Jannik Sinner', 'Right', 2);

-- Insert some Titles
INSERT INTO titles (player_id, tournament_name, year) VALUES 
(1, 'Wimbledon', 2023),
(2, 'French Open', 2022),
(4, 'US Open', 2023),
(5, 'Australian Open', 2024);
