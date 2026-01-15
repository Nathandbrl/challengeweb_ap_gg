<?php

namespace App\Controller;

use App\Entity\Player;
use App\Repository\PlayerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/players', name: 'api_players_')]
class PlayerController extends AbstractController
{
    public function __construct(
        private PlayerRepository $playerRepository,
        private EntityManagerInterface $entityManager
    ) {
    }

    #[Route('/{riotId}', name: 'show', methods: ['GET'])]
    public function show(string $riotId): JsonResponse
    {
        $player = $this->playerRepository->findByRiotId($riotId);

        if (!$player) {
            return $this->json(['error' => 'Player not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($this->serializePlayer($player));
    }

    #[Route('/search', name: 'search', methods: ['GET'])]
    public function search(Request $request): JsonResponse
    {
        $summonerName = $request->query->get('q');

        if (!$summonerName) {
            return $this->json(['error' => 'Search query required'], Response::HTTP_BAD_REQUEST);
        }

        $player = $this->playerRepository->findBySummonerName($summonerName);

        if (!$player) {
            return $this->json(['error' => 'Player not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($this->serializePlayer($player));
    }

    #[Route('', name: 'create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $player = new Player();
        $player->setRiotId($data['riotId'] ?? '');
        $player->setSummonerName($data['summonerName'] ?? '');
        $player->setTagLine($data['tagLine'] ?? null);
        $player->setProfileIconUrl($data['profileIconUrl'] ?? null);
        $player->setSummonerLevel($data['summonerLevel'] ?? 1);
        $player->setRank($data['rank'] ?? null);
        $player->setTier($data['tier'] ?? null);
        $player->setWins($data['wins'] ?? 0);
        $player->setLosses($data['losses'] ?? 0);

        $this->entityManager->persist($player);
        $this->entityManager->flush();

        return $this->json($this->serializePlayer($player), Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'update', methods: ['PUT', 'PATCH'])]
    public function update(int $id, Request $request): JsonResponse
    {
        $player = $this->playerRepository->find($id);

        if (!$player) {
            return $this->json(['error' => 'Player not found'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);

        if (isset($data['summonerName'])) {
            $player->setSummonerName($data['summonerName']);
        }
        if (isset($data['rank'])) {
            $player->setRank($data['rank']);
        }
        if (isset($data['tier'])) {
            $player->setTier($data['tier']);
        }
        if (isset($data['leaguePoints'])) {
            $player->setLeaguePoints($data['leaguePoints']);
        }
        if (isset($data['wins'])) {
            $player->setWins($data['wins']);
        }
        if (isset($data['losses'])) {
            $player->setLosses($data['losses']);
        }

        $player->setUpdatedAt(new \DateTimeImmutable());

        $this->entityManager->flush();

        return $this->json($this->serializePlayer($player));
    }

    private function serializePlayer(Player $player): array
    {
        return [
            'id' => $player->getId(),
            'riotId' => $player->getRiotId(),
            'summonerName' => $player->getSummonerName(),
            'tagLine' => $player->getTagLine(),
            'profileIconUrl' => $player->getProfileIconUrl(),
            'summonerLevel' => $player->getSummonerLevel(),
            'rank' => $player->getRank(),
            'tier' => $player->getTier(),
            'leaguePoints' => $player->getLeaguePoints(),
            'wins' => $player->getWins(),
            'losses' => $player->getLosses(),
            'createdAt' => $player->getCreatedAt()?->format('Y-m-d\TH:i:sP'),
            'updatedAt' => $player->getUpdatedAt()?->format('Y-m-d\TH:i:sP'),
        ];
    }
}
