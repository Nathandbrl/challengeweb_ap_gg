<?php

namespace App\Controller;

use App\Service\RiotApiService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/riot', name: 'riot_')]
class RiotController extends AbstractController
{
    public function __construct(private RiotApiService $riotApiService)
    {
    }

    #[Route('/champions', name: 'champions', methods: ['GET'])]
    public function getAllChampions(): JsonResponse
    {
        $champions = $this->riotApiService->getAllChampions();
        return $this->json($champions);
    }

    #[Route('/champion/{id}', name: 'champion_detail', methods: ['GET'])]
    public function getChampionDetail(string $id): JsonResponse
    {
        $champion = $this->riotApiService->getChampionDetails($id);
        if (empty($champion)) {
            return $this->json(['error' => 'Champion not found'], 404);
        }
        return $this->json($champion);
    }

    #[Route('/runes', name: 'runes', methods: ['GET'])]
    public function getRunes(): JsonResponse
    {
        $runes = $this->riotApiService->getAllRunes();
        return $this->json($runes);
    }

    #[Route('/items', name: 'items', methods: ['GET'])]
    public function getItems(): JsonResponse
    {
        $items = $this->riotApiService->getAllItems();
        return $this->json($items);
    }

    #[Route('/summoner-spells', name: 'summoner_spells', methods: ['GET'])]
    public function getSummonerSpells(): JsonResponse
    {
        $spells = $this->riotApiService->getSummonerSpells();
        return $this->json($spells);
    }

    #[Route('/champion-image/{id}', name: 'champion_image', methods: ['GET'])]
    public function getChampionImage(string $id): JsonResponse
    {
        $imageUrl = $this->riotApiService->getChampionImageUrl($id);
        return $this->json(['imageUrl' => $imageUrl]);
    }
}
