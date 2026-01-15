<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260115000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Create initial tables for AP.GG project';
    }

    public function up(Schema $schema): void
    {
        // Create champions table
        $this->addSql('CREATE TABLE champions (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, title VARCHAR(255) NOT NULL, description TEXT, role VARCHAR(50) NOT NULL, image_url VARCHAR(255), pick_rate DOUBLE PRECISION, win_rate DOUBLE PRECISION, riot_id VARCHAR(50), created_at TIMESTAMP(0) NOT NULL)');
        $this->addSql('CREATE INDEX idx_champion_role ON champions(role)');
        $this->addSql('CREATE INDEX idx_champion_name ON champions(name)');

        // Create items table
        $this->addSql('CREATE TABLE items (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, description TEXT, gold INTEGER, ap_bonus DOUBLE PRECISION, other_bonus DOUBLE PRECISION, image_url VARCHAR(255), riot_id VARCHAR(50), created_at TIMESTAMP(0) NOT NULL)');
        $this->addSql('CREATE INDEX idx_item_ap_bonus ON items(ap_bonus)');

        // Create ap_builds table
        $this->addSql('CREATE TABLE ap_builds (id SERIAL PRIMARY KEY, champion_id INTEGER NOT NULL REFERENCES champions(id) ON DELETE CASCADE, name VARCHAR(255) NOT NULL, description TEXT, win_rate DOUBLE PRECISION, pick_count INTEGER, difficulty VARCHAR(50), tips TEXT, priority INTEGER NOT NULL DEFAULT 0, is_active BOOLEAN NOT NULL DEFAULT true, created_at TIMESTAMP(0) NOT NULL, updated_at TIMESTAMP(0) NOT NULL)');
        $this->addSql('CREATE INDEX idx_ap_build_champion ON ap_builds(champion_id)');
        $this->addSql('CREATE INDEX idx_ap_build_active ON ap_builds(is_active)');

        // Create ap_build_items junction table
        $this->addSql('CREATE TABLE ap_build_items (ap_build_id INTEGER NOT NULL REFERENCES ap_builds(id) ON DELETE CASCADE, item_id INTEGER NOT NULL REFERENCES items(id) ON DELETE CASCADE, PRIMARY KEY(ap_build_id, item_id))');

        // Create players table
        $this->addSql('CREATE TABLE players (id SERIAL PRIMARY KEY, riot_id VARCHAR(255) NOT NULL UNIQUE, summoner_name VARCHAR(255) NOT NULL, tag_line VARCHAR(255), profile_icon_url VARCHAR(255), summoner_level INTEGER NOT NULL, rank VARCHAR(50), tier VARCHAR(50), league_points INTEGER, wins INTEGER, losses INTEGER, created_at TIMESTAMP(0) NOT NULL, updated_at TIMESTAMP(0) NOT NULL)');
        $this->addSql('CREATE INDEX idx_player_riot_id ON players(riot_id)');
        $this->addSql('CREATE INDEX idx_player_name ON players(summoner_name)');

        // Create player_statistics table
        $this->addSql('CREATE TABLE player_statistics (id SERIAL PRIMARY KEY, player_id INTEGER NOT NULL REFERENCES players(id) ON DELETE CASCADE, champion_id INTEGER NOT NULL REFERENCES champions(id) ON DELETE CASCADE, games_played INTEGER, wins INTEGER, win_rate DOUBLE PRECISION, avg_kills DOUBLE PRECISION, avg_deaths DOUBLE PRECISION, avg_assists DOUBLE PRECISION, avg_cs_per_min DOUBLE PRECISION, avg_gold_per_min DOUBLE PRECISION, created_at TIMESTAMP(0) NOT NULL, updated_at TIMESTAMP(0) NOT NULL)');
        $this->addSql('CREATE INDEX idx_player_stat_player ON player_statistics(player_id)');
        $this->addSql('CREATE INDEX idx_player_stat_champion ON player_statistics(champion_id)');
        $this->addSql('CREATE UNIQUE INDEX unique_player_champion ON player_statistics(player_id, champion_id)');

        // Create favorite_champions table
        $this->addSql('CREATE TABLE favorite_champions (id SERIAL PRIMARY KEY, player_id INTEGER NOT NULL REFERENCES players(id) ON DELETE CASCADE, champion_id INTEGER NOT NULL REFERENCES champions(id) ON DELETE CASCADE, added_at TIMESTAMP(0) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX unique_player_champion_fav ON favorite_champions(player_id, champion_id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE IF EXISTS favorite_champions CASCADE');
        $this->addSql('DROP TABLE IF EXISTS player_statistics CASCADE');
        $this->addSql('DROP TABLE IF EXISTS players CASCADE');
        $this->addSql('DROP TABLE IF EXISTS ap_build_items CASCADE');
        $this->addSql('DROP TABLE IF EXISTS ap_builds CASCADE');
        $this->addSql('DROP TABLE IF EXISTS items CASCADE');
        $this->addSql('DROP TABLE IF EXISTS champions CASCADE');
    }
}
