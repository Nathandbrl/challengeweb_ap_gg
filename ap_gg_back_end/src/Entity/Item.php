<?php

namespace App\Entity;

use App\Repository\ItemRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ItemRepository::class)]
#[ORM\Table(name: 'items')]
class Item
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, unique: true)]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?int $gold = null;

    #[ORM\Column(nullable: true)]
    private ?float $apBonus = null;

    #[ORM\Column(nullable: true)]
    private ?float $otherBonus = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $imageUrl = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $riotId = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, ApBuild>
     */
    #[ORM\ManyToMany(targetEntity: ApBuild::class, mappedBy: 'items')]
    private Collection $apBuilds;

    public function __construct()
    {
        $this->apBuilds = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;
        return $this;
    }

    public function getGold(): ?int
    {
        return $this->gold;
    }

    public function setGold(?int $gold): static
    {
        $this->gold = $gold;
        return $this;
    }

    public function getApBonus(): ?float
    {
        return $this->apBonus;
    }

    public function setApBonus(?float $apBonus): static
    {
        $this->apBonus = $apBonus;
        return $this;
    }

    public function getOtherBonus(): ?float
    {
        return $this->otherBonus;
    }

    public function setOtherBonus(?float $otherBonus): static
    {
        $this->otherBonus = $otherBonus;
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
            $apBuild->addItem($this);
        }
        return $this;
    }

    public function removeApBuild(ApBuild $apBuild): static
    {
        if ($this->apBuilds->removeElement($apBuild)) {
            $apBuild->removeItem($this);
        }
        return $this;
    }
}
