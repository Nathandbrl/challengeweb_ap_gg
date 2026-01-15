<?php

namespace App\Entity;

use App\Repository\PlayerStatisticRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerStatisticRepository::class)]
#[ORM\Table(name: 'player_statistics')]
class PlayerStatistic
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'statistics')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Player $player = null;

    #[ORM\ManyToOne(inversedBy: 'playerStatistics')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Champion $champion = null;

    #[ORM\Column(nullable: true)]
    private ?int $gamesPlayed = null;

    #[ORM\Column(nullable: true)]
    private ?int $wins = null;

    #[ORM\Column(nullable: true)]
    private ?float $winRate = null;

    #[ORM\Column(nullable: true)]
    private ?float $avgKills = null;

    #[ORM\Column(nullable: true)]
    private ?float $avgDeaths = null;

    #[ORM\Column(nullable: true)]
    private ?float $avgAssists = null;

    #[ORM\Column(nullable: true)]
    private ?float $avgCsPerMin = null;

    #[ORM\Column(nullable: true)]
    private ?float $avgGoldPerMin = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlayer(): ?Player
    {
        return $this->player;
    }

    public function setPlayer(?Player $player): static
    {
        $this->player = $player;
        return $this;
    }

    public function getChampion(): ?Champion
    {
        return $this->champion;
    }

    public function setChampion(?Champion $champion): static
    {
        $this->champion = $champion;
        return $this;
    }

    public function getGamesPlayed(): ?int
    {
        return $this->gamesPlayed;
    }

    public function setGamesPlayed(?int $gamesPlayed): static
    {
        $this->gamesPlayed = $gamesPlayed;
        return $this;
    }

    public function getWins(): ?int
    {
        return $this->wins;
    }

    public function setWins(?int $wins): static
    {
        $this->wins = $wins;
        return $this;
    }

    public function getWinRate(): ?float
    {
        return $this->winRate;
    }

    public function setWinRate(?float $winRate): static
    {
        $this->winRate = $winRate;
        return $this;
    }

    public function getAvgKills(): ?float
    {
        return $this->avgKills;
    }

    public function setAvgKills(?float $avgKills): static
    {
        $this->avgKills = $avgKills;
        return $this;
    }

    public function getAvgDeaths(): ?float
    {
        return $this->avgDeaths;
    }

    public function setAvgDeaths(?float $avgDeaths): static
    {
        $this->avgDeaths = $avgDeaths;
        return $this;
    }

    public function getAvgAssists(): ?float
    {
        return $this->avgAssists;
    }

    public function setAvgAssists(?float $avgAssists): static
    {
        $this->avgAssists = $avgAssists;
        return $this;
    }

    public function getAvgCsPerMin(): ?float
    {
        return $this->avgCsPerMin;
    }

    public function setAvgCsPerMin(?float $avgCsPerMin): static
    {
        $this->avgCsPerMin = $avgCsPerMin;
        return $this;
    }

    public function getAvgGoldPerMin(): ?float
    {
        return $this->avgGoldPerMin;
    }

    public function setAvgGoldPerMin(?float $avgGoldPerMin): static
    {
        $this->avgGoldPerMin = $avgGoldPerMin;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }
}
