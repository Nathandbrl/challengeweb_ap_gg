<?php

namespace App\Repository;

use App\Entity\ApBuild;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ApBuild>
 */
class ApBuildRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApBuild::class);
    }

    public function findActiveBuilds(): array
    {
        return $this->findBy(['isActive' => true], ['priority' => 'ASC']);
    }

    public function findByChampionName(string $championName): array
    {
        return $this->createQueryBuilder('ab')
            ->leftJoin('ab.champion', 'c')
            ->where('c.name = :championName')
            ->andWhere('ab.isActive = true')
            ->setParameter('championName', $championName)
            ->orderBy('ab.priority', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
