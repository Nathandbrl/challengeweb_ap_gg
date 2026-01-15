<?php

namespace App\Controller;

use App\Repository\ApBuildRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/builds', name: 'api_builds_')]
class ApBuildController extends AbstractController
{
    public function __construct(private ApBuildRepository $buildRepository)
    {
    }

    #[Route('', name: 'list', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $builds = $this->buildRepository->findActiveBuilds();

        return $this->json(array_map(fn($build) => $this->serializeBuild($build), $builds));
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $build = $this->buildRepository->find($id);

        if (!$build) {
            return $this->json(['error' => 'Build not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($this->serializeBuild($build));
    }

    #[Route('/champion/{championName}', name: 'by_champion', methods: ['GET'])]
    public function byChampion(string $championName): JsonResponse
    {
        $builds = $this->buildRepository->findByChampionName($championName);

        return $this->json(array_map(fn($build) => $this->serializeBuild($build), $builds));
    }

    private function serializeBuild($build): array
    {
        return [
            'id' => $build->getId(),
            'name' => $build->getName(),
            'description' => $build->getDescription(),
            'difficulty' => $build->getDifficulty(),
            'winRate' => $build->getWinRate(),
            'pickCount' => $build->getPickCount(),
            'tips' => $build->getTips(),
            'priority' => $build->getPriority(),
            'isActive' => $build->isActive(),
            'champion' => [
                'id' => $build->getChampion()?->getId(),
                'name' => $build->getChampion()?->getName(),
            ],
            'items' => array_map(fn($item) => [
                'id' => $item->getId(),
                'name' => $item->getName(),
                'apBonus' => $item->getApBonus(),
                'gold' => $item->getGold(),
            ], $build->getItems()->toArray()),
            'createdAt' => $build->getCreatedAt()?->format('Y-m-d\TH:i:sP'),
            'updatedAt' => $build->getUpdatedAt()?->format('Y-m-d\TH:i:sP'),
        ];
    }
}
