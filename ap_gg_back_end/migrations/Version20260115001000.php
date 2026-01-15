<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260115001000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add search-related fields and ensure proper indexes for Champion entity';
    }

    public function up(Schema $schema): void
    {
        // Ensure Champion table exists with proper fields for search
        $table = $schema->getTable('champion');
        
        // Add indexes for faster search queries
        if (!$table->hasIndex('idx_champion_name')) {
            $this->addSql('CREATE INDEX idx_champion_name ON champion (name)');
        }
        
        if (!$table->hasIndex('idx_champion_title')) {
            $this->addSql('CREATE INDEX idx_champion_title ON champion (title)');
        }

        if (!$table->hasIndex('idx_champion_pick_rate')) {
            $this->addSql('CREATE INDEX idx_champion_pick_rate ON champion (pick_rate)');
        }
    }

    public function down(Schema $schema): void
    {
        // Drop indexes
        $table = $schema->getTable('champion');
        
        if ($table->hasIndex('idx_champion_name')) {
            $this->addSql('DROP INDEX idx_champion_name ON champion');
        }
        
        if ($table->hasIndex('idx_champion_title')) {
            $this->addSql('DROP INDEX idx_champion_title ON champion');
        }

        if ($table->hasIndex('idx_champion_pick_rate')) {
            $this->addSql('DROP INDEX idx_champion_pick_rate ON champion');
        }
    }
}
