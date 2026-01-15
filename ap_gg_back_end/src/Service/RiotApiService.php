<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class RiotApiService
{
    private string $riotApiKey;
    private HttpClientInterface $httpClient;
    private const RIOT_API_VERSION = '14.1.1'; // Data Dragon version

    public function __construct(HttpClientInterface $httpClient)
    {
        $this->riotApiKey = $_ENV['RIOT_API_KEY'] ?? '';
        $this->httpClient = $httpClient;
    }

    /**
     * Get all champions data from Data Dragon
     */
    public function getAllChampions(): array
    {
        try {
            $url = "https://ddragon.leagueoflegends.com/cdn/" . self::RIOT_API_VERSION . "/data/en_US/champion.json";
            $response = $this->httpClient->request('GET', $url);
            return $response->toArray()['data'] ?? [];
        } catch (\Exception $e) {
            return [];
        }
    }

    /**
     * Get specific champion details
     */
    public function getChampionDetails(string $championKey): array
    {
        try {
            $url = "https://ddragon.leagueoflegends.com/cdn/" . self::RIOT_API_VERSION . "/data/en_US/champion/{$championKey}.json";
            $response = $this->httpClient->request('GET', $url);
            return $response->toArray()['data'][$championKey] ?? [];
        } catch (\Exception $e) {
            return [];
        }
    }

    /**
     * Get all runes data
     */
    public function getAllRunes(): array
    {
        try {
            $url = "https://ddragon.leagueoflegends.com/cdn/" . self::RIOT_API_VERSION . "/data/en_US/runetree.json";
            $response = $this->httpClient->request('GET', $url);
            return $response->toArray() ?? [];
        } catch (\Exception $e) {
            return [];
        }
    }

    /**
     * Get all items data
     */
    public function getAllItems(): array
    {
        try {
            $url = "https://ddragon.leagueoflegends.com/cdn/" . self::RIOT_API_VERSION . "/data/en_US/item.json";
            $response = $this->httpClient->request('GET', $url);
            return $response->toArray()['data'] ?? [];
        } catch (\Exception $e) {
            return [];
        }
    }

    /**
     * Get summoner spells data
     */
    public function getSummonerSpells(): array
    {
        try {
            $url = "https://ddragon.leagueoflegends.com/cdn/" . self::RIOT_API_VERSION . "/data/en_US/summoner.json";
            $response = $this->httpClient->request('GET', $url);
            return $response->toArray()['data'] ?? [];
        } catch (\Exception $e) {
            return [];
        }
    }

    /**
     * Get image URL for champion
     */
    public function getChampionImageUrl(string $championKey): string
    {
        return "https://ddragon.leagueoflegends.com/cdn/" . self::RIOT_API_VERSION . "/img/champion/{$championKey}.png";
    }

    /**
     * Get image URL for item
     */
    public function getItemImageUrl(string $itemId): string
    {
        return "https://ddragon.leagueoflegends.com/cdn/" . self::RIOT_API_VERSION . "/img/item/{$itemId}.png";
    }

    /**
     * Get image URL for spell
     */
    public function getSpellImageUrl(string $spellImage): string
    {
        return "https://ddragon.leagueoflegends.com/cdn/" . self::RIOT_API_VERSION . "/img/spell/{$spellImage}";
    }

    /**
     * Get image URL for rune
     */
    public function getRuneImageUrl(string $runePath): string
    {
        return "https://ddragon.leagueoflegends.com/cdn/img/{$runePath}";
    }
}
