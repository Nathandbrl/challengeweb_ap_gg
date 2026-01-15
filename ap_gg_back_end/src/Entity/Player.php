<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
#[ORM\Table(name: 'players')]
class Player
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, unique: true)]
    private ?string $riotId = null;

    #[ORM\Column(length: 255)]
    private ?string $summonerName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $tagLine = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $profileIconUrl = null;

    #[ORM\Column]
    private ?int $summonerLevel = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $rank = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $tier = null;

    #[ORM\Column(nullable: true)]
    private ?int $leaguePoints = null;

    #[ORM\Column(nullable: true)]
    private ?int $wins = null;

    #[ORM\Column(nullable: true)]
    private ?int $losses = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $updatedAt = null;

    /**
     * @var Collection<int, PlayerStatistic>
     */
    #[ORM\OneToMany(targetEntity: PlayerStatistic::class, mappedBy: 'player', orphanRemoval: true)]
    private Collection $statistics;

    /**
     * @var Collection<int, FavoriteChampion>
     */
    #[ORM\OneToMany(targetEntity: FavoriteChampion::class, mappedBy: 'player', orphanRemoval: true)]
    private Collection $favoriteChampions;

    public function __construct()
    {
        $this->statistics = new ArrayCollection();
        $this->favoriteChampions = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRiotId(): ?string
    {
        return $this->riotId;
    }

    public function setRiotId(string $riotId): static
    {
        $this->riotId = $riotId;
        return $this;
    }

    public function getSummonerName(): ?string
    {
        return $this->summonerName;
    }

    public function setSummonerName(string $summonerName): static
    {
        $this->summonerName = $summonerName;
        return $this;
    }

    public function getTagLine(): ?string
    {
        return $this->tagLine;
    }

    public function setTagLine(?string $tagLine): static
    {
        $this->tagLine = $tagLine;
        return $this;
    }

    public function getProfileIconUrl(): ?string
    {
        return $this->profileIconUrl;
    }

    public function setProfileIconUrl(?string $profileIconUrl): static
    {
        $this->profileIconUrl = $profileIconUrl;
        return $this;
    }

    public function getSummonerLevel(): ?int
    {
        return $this->summonerLevel;
    }

    public function setSummonerLevel(int $summonerLevel): static
    {
        $this->summonerLevel = $summonerLevel;
        return $this;
    }

    public function getRank(): ?string
    {
        return $this->rank;
    }

    public function setRank(?string $rank): static
    {
        $this->rank = $rank;
        return $this;
    }

    public function getTier(): ?string
    {
        return $this->tier;
    }

    public function setTier(?string $tier): static
    {
        $this->tier = $tier;
        return $this;
    }

    public function getLeaguePoints(): ?int
    {
        return $this->leaguePoints;
    }

    public function setLeaguePoints(?int $leaguePoints): static
    {
        $this->leaguePoints = $leaguePoints;
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

    public function getLosses(): ?int
    {
        return $this->losses;
    }

    public function setLosses(?int $losses): static
    {
        $this->losses = $losses;
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

    /**
     * @return Collection<int, PlayerStatistic>
     */
    public function getStatistics(): Collection
    {
        return $this->statistics;
    }

    public function addStatistic(PlayerStatistic $statistic): static
    {
        if (!$this->statistics->contains($statistic)) {
            $this->statistics->add($statistic);
            $statistic->setPlayer($this);
        }
        return $this;
    }

    public function removeStatistic(PlayerStatistic $statistic): static
    {
        if ($this->statistics->removeElement($statistic)) {
            if ($statistic->getPlayer() === $this) {
                $statistic->setPlayer(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, FavoriteChampion>
     */
    public function getFavoriteChampions(): Collection
    {
        return $this->favoriteChampions;
    }

    public function addFavoriteChampion(FavoriteChampion $favoriteChampion): static
    {
        if (!$this->favoriteChampions->contains($favoriteChampion)) {
            $this->favoriteChampions->add($favoriteChampion);
            $favoriteChampion->setPlayer($this);
        }
        return $this;
    }

    public function removeFavoriteChampion(FavoriteChampion $favoriteChampion): static
    {
        if ($this->favoriteChampions->removeElement($favoriteChampion)) {
            if ($favoriteChampion->getPlayer() === $this) {
                $favoriteChampion->setPlayer(null);
            }
        }
        return $this;
    }
}
