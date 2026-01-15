# API de Recherche de Champions - Documentation

## Nouveaux Endpoints

### 1. Recherche Plein Texte
**Endpoint**: `GET /api/champions/search`

**Paramètres**:
- `q` (string, requis): Requête de recherche (minimum 2 caractères)

**Réponse**:
```json
[
  {
    "id": 1,
    "name": "Ashe",
    "title": "L'Archer de la Glace",
    "description": "Ashe est une archer des terres gelées...",
    "role": "ADC",
    "imageUrl": "...",
    "pickRate": 8.5,
    "winRate": 48.3,
    "riotId": "Ashe",
    "createdAt": "2025-01-15T00:00:00+00:00"
  }
]
```

**Exemple**: 
```
GET http://localhost:8000/api/champions/search?q=ash
```

---

### 2. Autocomplete
**Endpoint**: `GET /api/champions/autocomplete`

**Paramètres**:
- `q` (string, requis): Requête d'autocomplete (minimum 1 caractère)

**Réponse**:
```json
[
  {
    "id": 1,
    "name": "Ashe",
    "imageUrl": "..."
  },
  {
    "id": 2,
    "name": "Ahri",
    "imageUrl": "..."
  }
]
```

**Note**: Retourne un maximum de 10 résultats, optimisé pour les suggestions en temps réel.

---

### 3. Top Champions
**Endpoint**: `GET /api/champions/top`

**Paramètres**:
- `limit` (integer, optionnel): Nombre de champions à retourner (défaut: 5, max: 20)

**Réponse**:
```json
[
  {
    "id": 1,
    "name": "Ahri",
    "title": "La Neuf-Queues",
    "description": "...",
    "role": "MID",
    "imageUrl": "...",
    "pickRate": 12.5,
    "winRate": 51.2,
    "riotId": "Ahri",
    "createdAt": "2025-01-15T00:00:00+00:00"
  }
]
```

**Utilisation**: Afficher les champions les plus joués quand la barre de recherche est vide.

---

## Performance & Optimisations

### Indexes de Base de Données
Les colonnes suivantes sont indexées pour optimiser la recherche:
- `champion.name` - Recherche par nom
- `champion.title` - Recherche par titre
- `champion.pick_rate` - Tri par popularité

### Debounce Frontend
Le frontend applique un délai de 300ms avant d'envoyer les requêtes pour:
- Réduire le nombre de requêtes serveur
- Améliorer l'expérience utilisateur
- Diminuer la charge serveur

### Caching
Le service `ChampionSearchService` utilise RxJS operators:
- `distinctUntilChanged()`: N'envoie pas de requête si la requête est identique
- `shareReplay(1)`: Cache la liste complète des champions

---

## Intégration avec le Frontend

### ChampionSearchComponent
Nouveau composant standalone avec:
- Autocomplete Material intégré
- Suggestions en temps réel avec debounce
- Images des champions dans les suggestions
- Support tactile complet

### ChampionSearchService
Service injectable avec:
- `getAutocompleteSuggestions(query)`: Autocomplete
- `searchChampions(query)`: Recherche plein texte
- `getTopChampions(limit)`: Top champions
- `updateSearchQuery(query)`: Mise à jour avec debounce

---

## Cas d'Usage

### Cas 1: Autocomplete Standard
1. L'utilisateur tape "a" dans la barre
2. Frontend affiche les 5 champions les plus joués
3. L'utilisateur continue "sh"
4. Frontend affiche les résultats autocomplete (Ashe, Ahri, etc.)

### Cas 2: Recherche Complète
1. L'utilisateur tape "ice" et appuie sur Entrée
2. Frontend envoie la requête de recherche
3. Backend retourne tous les champions contenant "ice" dans le nom ou le titre
4. Les résultats s'affichent avec filtrage par rôle

### Cas 3: Sélection depuis Suggestions
1. L'utilisateur clique sur un champion dans les suggestions
2. Le composant parent reçoit l'événement `championSelected`
3. Le contenu principal met en évidence le champion sélectionné

---

## Erreurs & Gestion

### Requête Trop Courte
```json
{
  "error": "bad_request"
}
```
Status: 400

### Champion Non Trouvé
L'API retourne un tableau vide au lieu d'une erreur.

---

## Filtres Avancés (Futur)
Les endpoints peuvent être étendus avec:
- Filtrage par rôle: `?q=mid&role=MID`
- Filtrage par taux de victoire: `?q=&minWinRate=50`
- Tri personnalisé: `?q=&sort=winRate&order=desc`
