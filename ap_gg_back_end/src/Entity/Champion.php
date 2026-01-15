<?php

namespace App\Entity;

use App\Repository\ChampionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChampionRepository::class)]
#[ORM\Table(name: 'champions')]
class Champion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, unique: true)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 50)]
    private ?string $role = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $imageUrl = null;

    #[ORM\Column(nullable: true)]
    private ?float $pickRate = null;

    #[ORM\Column(nullable: true)]
    private ?float $winRate = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $riotId = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, ApBuild>
     */
    #[ORM\OneToMany(targetEntity: ApBuild::class, mappedBy: 'champion', orphanRemoval: true)]
    private Collection $apBuilds;

    /**
     * @var Collection<int, PlayerStatistic>
     */
    #[ORM\OneToMany(targetEntity: PlayerStatistic::class, mappedBy: 'champion', orphanRemoval: true)]
    private Collection $playerStatistics;

    /**
     * @var Collection<int, FavoriteChampion>
     */
    #[ORM\OneToMany(targetEntity: FavoriteChampion::class, mappedBy: 'champion', orphanRemoval: true)]
    private Collection $favorites;

    public function __construct()
    {
        $this->apBuilds = new ArrayCollection();
        $this->playerStatistics = new ArrayCollection();
        $this->favorites = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;
        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): static
    {
        $this->role = $role;
        return $this;
    }

    public function getImageUrl(): ?string
    {
        return $this->imageUrl;
    }

    public function setImageUrl(?string $imageUrl): static
    {
        $this->imageUrl = $imageUrl;
        return $this;
    }

    public function getPickRate(): ?float
    {
        return $this->pickRate;
    }

    public function setPickRate(?float $pickRate): static
    {
        $this->pickRate = $pickRate;
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

    public function getRiotId(): ?string
    {
        return $this->riotId;
    }

    public function setRiotId(?string $riotId): static
    {
        $this->riotId = $riotId;
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

    /**
     * @return Collection<int, ApBuild>
     */
    public function getApBuilds(): Collection
    {
        return $this->apBuilds;
    }

    public function addApBuild(ApBuild $apBuild): static
    {
        if (!$this->apBuilds->contains($apBuild)) {
            $this->apBuilds->add($apBuild);
            $apBuild->setChampion($this);
        }
        return $this;
    }

    public function removeApBuild(ApBuild $apBuild): static
    {
        if ($this->apBuilds->removeElement($apBuild)) {
            if ($apBuild->getChampion() === $this) {
                $apBuild->setChampion(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, PlayerStatistic>
     */
    public function getPlayerStatistics(): Collection
    {
        return $this->playerStatistics;
    }

    public function addPlayerStatistic(PlayerStatistic $playerStatistic): static
    {
        if (!$this->playerStatistics->contains($playerStatistic)) {
            $this->playerStatistics->add($playerStatistic);
            $playerStatistic->setChampion($this);
        }
        return $this;
    }

    public function removePlayerStatistic(PlayerStatistic $playerStatistic): static
    {
        if ($this->playerStatistics->removeElement($playerStatistic)) {
            if ($playerStatistic->getChampion() === $this) {
                $playerStatistic->setChampion(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, FavoriteChampion>
     */
    public function getFavorites(): Collection
    {
        return $this->favorites;
    }

    public function addFavorite(FavoriteChampion $favorite): static
    {
        if (!$this->favorites->contains($favorite)) {
            $this->favorites->add($favorite);
            $favorite->setChampion($this);
        }
        return $this;
    }

    public function removeFavorite(FavoriteChampion $favorite): static
    {
        if ($this->favorites->removeElement($favorite)) {
            if ($favorite->getChampion() === $this) {
                $favorite->setChampion(null);
            }
        }
        return $this;
    }
}
