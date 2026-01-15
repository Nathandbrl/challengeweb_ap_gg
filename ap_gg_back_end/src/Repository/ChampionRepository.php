<?php

namespace App\Repository;

use App\Entity\Champion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Champion>
 */
class ChampionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Champion::class);
    }

    public function findByName(string $name): ?Champion
    {
        return $this->findOneBy(['name' => $name]);
    }

    public function findByRole(string $role): array
    {
        return $this->findBy(['role' => $role]);
    }

    public function findAllOrderedByName(): array
    {
        return $this->findBy([], ['name' => 'ASC']);
    }

    /**
     * Search champions by name or title
     */
    public function findByNameOrTitle(string $query): array
    {
        return $this->createQueryBuilder('c')
            ->where('c.name LIKE :query OR c.title LIKE :query')
            ->setParameter('query', '%' . $query . '%')
            ->orderBy('c.name', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Autocomplete search - returns partial matches
     */
    public function findByNameOrTitleAutocomplete(string $query): array
    {
        return $this->createQueryBuilder('c')
            ->where('c.name LIKE :query OR c.title LIKE :query')
            ->setParameter('query', $query . '%')
            ->orderBy('c.name', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult();
    }

    /**
     * Get top champions by pick rate
     */
    public function findTopByPickRate(int $limit = 5): array
    {
        return $this->createQueryBuilder('c')
            ->orderBy('c.pickRate', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}
