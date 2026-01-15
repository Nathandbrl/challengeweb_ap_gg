<?php

namespace App\Controller;

use App\Repository\PlayerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/statistics', name: 'api_stats_')]
class PlayerStatisticController extends AbstractController
{
    public function __construct(private PlayerRepository $playerRepository)
    {
    }

    #[Route('/player/{playerId}', name: 'by_player', methods: ['GET'])]
    public function byPlayer(int $playerId): JsonResponse
    {
        $player = $this->playerRepository->find($playerId);

        if (!$player) {
            return $this->json(['error' => 'Player not found'], Response::HTTP_NOT_FOUND);
        }

        $statistics = $player->getStatistics();

        return $this->json(array_map(fn($stat) => $this->serializeStatistic($stat), $statistics->toArray()));
    }

    private function serializeStatistic($statistic): array
    {
        return [
            'id' => $statistic->getId(),
            'playerId' => $statistic->getPlayer()?->getId(),
            'championId' => $statistic->getChampion()?->getId(),
            'championName' => $statistic->getChampion()?->getName(),
            'gamesPlayed' => $statistic->getGamesPlayed(),
            'wins' => $statistic->getWins(),
            'winRate' => $statistic->getWinRate(),
            'avgKills' => $statistic->getAvgKills(),
            'avgDeaths' => $statistic->getAvgDeaths(),
            'avgAssists' => $statistic->getAvgAssists(),
            'avgCsPerMin' => $statistic->getAvgCsPerMin(),
            'avgGoldPerMin' => $statistic->getAvgGoldPerMin(),
        ];
    }
}
