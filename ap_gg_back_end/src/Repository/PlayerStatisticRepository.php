<?php

namespace App\Repository;

use App\Entity\PlayerStatistic;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlayerStatistic>
 */
class PlayerStatisticRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlayerStatistic::class);
    }

    public function findByPlayer(int $playerId): array
    {
        return $this->findBy(['player' => $playerId], ['winRate' => 'DESC']);
    }
}
