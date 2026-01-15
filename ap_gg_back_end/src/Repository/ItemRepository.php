<?php

namespace App\Repository;

use App\Entity\Item;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Item>
 */
class ItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Item::class);
    }

    public function findByName(string $name): ?Item
    {
        return $this->findOneBy(['name' => $name]);
    }

    public function findApItems(): array
    {
        return $this->createQueryBuilder('i')
            ->where('i.apBonus IS NOT NULL')
            ->andWhere('i.apBonus > 0')
            ->orderBy('i.apBonus', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
