# 📡 Documentation API AP.GG

## Base URL
```
http://localhost:8000/api
```

## Format de Réponse
Toutes les réponses sont en JSON.

```json
{
  "id": 1,
  "name": "Example",
  "timestamp": "2026-01-15T10:30:00Z"
}
```

---

## Endpoints Disponibles

### 🎮 Players (Joueurs)

#### Rechercher un joueur
```http
GET /api/players/search?q={summonerName}
```

**Query Parameters:**
- `q` (string, required) : Pseudo du joueur

**Response (200):**
```json
{
  "id": 1,
  "riotId": "player#12345",
  "summonerName": "Doublelift",
  "tagLine": "NA1",
  "profileIconUrl": "https://...",
  "summonerLevel": 250,
  "tier": "Challenger",
  "rank": "I",
  "leaguePoints": 400,
  "wins": 500,
  "losses": 200,
  "createdAt": "2026-01-15T10:30:00Z",
  "updatedAt": "2026-01-15T10:30:00Z"
}
```

**Errors:**
- `404` : Joueur non trouvé

---

#### Obtenir un joueur par Riot ID
```http
GET /api/players/{riotId}
```

**Path Parameters:**
- `riotId` (string) : ID Riot du joueur

**Response (200):** Même format que ci-dessus

---

#### Créer un joueur
```http
POST /api/players
Content-Type: application/json
```

**Request Body:**
```json
{
  "riotId": "player#12345",
  "summonerName": "Doublelift",
  "tagLine": "NA1",
  "profileIconUrl": "https://...",
  "summonerLevel": 250,
  "rank": "I",
  "tier": "Challenger",
  "wins": 500,
  "losses": 200
}
```

**Response (201):** Même format que ci-dessus

---

#### Mettre à jour un joueur
```http
PUT /api/players/{id}
Content-Type: application/json
```

**Path Parameters:**
- `id` (integer) : ID du joueur

**Request Body:**
```json
{
  "rank": "II",
  "leaguePoints": 450,
  "wins": 510
}
```

**Response (200):** Joueur mis à jour

---

### 🏆 Champions

#### Lister tous les champions
```http
GET /api/champions
```

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "Ahri",
    "title": "La Neuf-Queues",
    "description": "Magicienne mobile avec dash",
    "role": "Mid",
    "imageUrl": "https://...",
    "pickRate": 8.5,
    "winRate": 52.3,
    "riotId": "Ahri",
    "createdAt": "2026-01-15T10:30:00Z"
  }
]
```

---

#### Obtenir un champion spécifique
```http
GET /api/champions/{id}
```

**Path Parameters:**
- `id` (integer) : ID du champion

**Response (200):** Champion individuel

---

#### Filtrer les champions par rôle
```http
GET /api/champions/role/{role}
```

**Path Parameters:**
- `role` (string) : Rôle du champion (Mid, Support, Top, Jungle, ADC)

**Response (200):** Array de champions

**Rôles disponibles:**
- `Mid` - Magiciens
- `Support` - Supports
- `Top` - Top laners
- `Jungle` - Junglers
- `ADC` - AD Carries

---

### 🛠️ AP Builds (Builds Ability Power)

#### Lister tous les builds
```http
GET /api/builds
```

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "Build One-Shot",
    "description": "Build offensive maximisant les dégâts",
    "difficulty": "Difficile",
    "winRate": 54.2,
    "pickCount": 250,
    "tips": "Jouer agressivement post-6. Utiliser le dash pour kite.",
    "priority": 1,
    "isActive": true,
    "champion": {
      "id": 1,
      "name": "Ahri"
    },
    "items": [
      {
        "id": 1,
        "name": "Capuchon de Rabadon",
        "apBonus": 120,
        "gold": 3500
      }
    ],
    "createdAt": "2026-01-15T10:30:00Z",
    "updatedAt": "2026-01-15T10:30:00Z"
  }
]
```

---

#### Obtenir un build spécifique
```http
GET /api/builds/{id}
```

**Path Parameters:**
- `id` (integer) : ID du build

**Response (200):** Build individuel

---

#### Obtenir les builds d'un champion
```http
GET /api/builds/champion/{championName}
```

**Path Parameters:**
- `championName` (string) : Nom du champion (ex: "Ahri")

**Response (200):** Array de builds pour ce champion

---

### 📊 Player Statistics (Statistiques Joueur)

#### Obtenir les statistiques d'un joueur
```http
GET /api/statistics/player/{playerId}
```

**Path Parameters:**
- `playerId` (integer) : ID du joueur

**Response (200):**
```json
[
  {
    "id": 1,
    "playerId": 1,
    "championId": 1,
    "championName": "Ahri",
    "gamesPlayed": 50,
    "wins": 30,
    "winRate": 60.0,
    "avgKills": 8.5,
    "avgDeaths": 4.2,
    "avgAssists": 12.3,
    "avgCsPerMin": 6.8,
    "avgGoldPerMin": 450
  }
]
```

---

## 🔐 CORS Configuration

Les requêtes CORS sont autorisées depuis :
- `http://localhost:4200` (développement Angular)
- `http://127.0.0.1:4200`
- Autres domaines configurables dans `.env`

---

## ❌ Codes d'Erreur

| Code | Signification |
|------|---------------|
| `200` | OK - Requête réussie |
| `201` | Created - Ressource créée |
| `400` | Bad Request - Requête invalide |
| `404` | Not Found - Ressource non trouvée |
| `422` | Unprocessable Entity - Validation échouée |
| `500` | Internal Server Error - Erreur serveur |

---

## 📝 Exemples avec cURL

### Rechercher un joueur
```bash
curl -X GET "http://localhost:8000/api/players/search?q=Doublelift" \
  -H "Content-Type: application/json"
```

### Lister tous les champions
```bash
curl -X GET "http://localhost:8000/api/champions" \
  -H "Content-Type: application/json"
```

### Obtenir les builds d'Ahri
```bash
curl -X GET "http://localhost:8000/api/builds/champion/Ahri" \
  -H "Content-Type: application/json"
```

### Créer un nouvel joueur
```bash
curl -X POST "http://localhost:8000/api/players" \
  -H "Content-Type: application/json" \
  -d '{
    "riotId": "newplayer#12345",
    "summonerName": "NewSummoner",
    "tagLine": "NA1",
    "summonerLevel": 100
  }'
```

---

## 🧪 Tester avec Postman

1. Importez cette collection dans Postman
2. Configurez la variable `baseUrl` : `http://localhost:8000/api`
3. Testez chaque endpoint

**Variables Postman:**
```
baseUrl = http://localhost:8000/api
championId = 1
playerId = 1
```

---

## 📚 Version de l'API

**Version actuelle:** 1.0.0  
**Dernière mise à jour:** 15 Janvier 2026

---

## 🔄 Pagination (Future)

```
GET /api/champions?page=1&limit=20
```

*Non implémentée pour l'instant.*

---

## 🔑 Authentification (Future)

```
Authorization: Bearer {token}
```

*À implémenter.*

---

Made with ❤️ by AP.GG Team
