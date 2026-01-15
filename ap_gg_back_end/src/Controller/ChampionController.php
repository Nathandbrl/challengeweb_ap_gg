<?php

namespace App\Controller;

use App\Repository\ChampionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/champions', name: 'api_champions_')]
class ChampionController extends AbstractController
{
    public function __construct(private ChampionRepository $championRepository)
    {
    }

    #[Route('', name: 'list', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $champions = $this->championRepository->findAllOrderedByName();

        return $this->json(array_map(fn($champion) => $this->serializeChampion($champion), $champions));
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $champion = $this->championRepository->find($id);

        if (!$champion) {
            return $this->json(['error' => 'Champion not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($this->serializeChampion($champion));
    }

    #[Route('/role/{role}', name: 'by_role', methods: ['GET'])]
    public function byRole(string $role): JsonResponse
    {
        $champions = $this->championRepository->findByRole($role);

        return $this->json(array_map(fn($champion) => $this->serializeChampion($champion), $champions));
    }

    private function serializeChampion($champion): array
    {
        return [
            'id' => $champion->getId(),
            'name' => $champion->getName(),
            'title' => $champion->getTitle(),
            'description' => $champion->getDescription(),
            'role' => $champion->getRole(),
            'imageUrl' => $champion->getImageUrl(),
            'pickRate' => $champion->getPickRate(),
            'winRate' => $champion->getWinRate(),
            'riotId' => $champion->getRiotId(),
            'createdAt' => $champion->getCreatedAt()?->format('Y-m-d\TH:i:sP'),
        ];
    }
}
