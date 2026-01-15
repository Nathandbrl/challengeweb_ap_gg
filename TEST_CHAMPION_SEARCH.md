# Tests pour l'API de Recherche de Champions

## Script de Test cURL

### Test 1: Autocomplete (requête courte)
```bash
curl -X GET "http://localhost:8000/api/champions/autocomplete?q=a" \
  -H "Accept: application/json"
```

**Résultat attendu**: Liste de champions commençant par "a" (max 10)

---

### Test 2: Autocomplete (plusieurs caractères)
```bash
curl -X GET "http://localhost:8000/api/champions/autocomplete?q=as" \
  -H "Accept: application/json"
```

**Résultat attendu**: ["Ashe", "Astro (si existe)"]

---

### Test 3: Recherche Plein Texte
```bash
curl -X GET "http://localhost:8000/api/champions/search?q=ice" \
  -H "Accept: application/json"
```

**Résultat attendu**: Tous les champions avec "ice" dans le nom ou le titre

---

### Test 4: Top Champions
```bash
curl -X GET "http://localhost:8000/api/champions/top?limit=5" \
  -H "Accept: application/json"
```

**Résultat attendu**: 5 champions avec le meilleur pick rate

---

### Test 5: Erreur - Requête trop courte pour recherche
```bash
curl -X GET "http://localhost:8000/api/champions/search?q=a" \
  -H "Accept: application/json"
```

**Résultat attendu**: 400 Bad Request

---

## Tests d'Intégration Frontend

### Test 1: Autocomplete en temps réel
1. Naviguer vers `/champions`
2. Commencer à taper dans la barre de recherche
3. Vérifier que les suggestions s'affichent après 300ms
4. Vérifier que les images des champions s'affichent

### Test 2: Sélection depuis suggestions
1. Taper "ashe"
2. Cliquer sur "Ashe" dans les suggestions
3. Vérifier que la recherche se ferme et que le champion est mis en évidence

### Test 3: Debounce
1. Taper rapidement: a-s-h-e
2. Vérifier que seule une requête est envoyée (à 300ms après la fin)
3. Vérifier dans les Network Tools du navigateur

### Test 4: Top Champions (barre vide)
1. Cliquer sur la barre de recherche vide
2. Vérifier que les 5 champions les plus joués s'affichent

---

## Checklist de Performance

- [ ] Temps de réponse autocomplete < 200ms
- [ ] Temps de réponse recherche < 500ms
- [ ] Nombre de requêtes en tapant 10 caractères = 1 (avec debounce)
- [ ] Images des champions chargées correctement
- [ ] Pas de fuite mémoire lors des recherches répétées

---

## Test Spécifique: Debounce

Ouvrir les Dev Tools -> Network tab et:
1. Taper "lux"
2. Vérifier qu'il y a 1 requête POST/GET (pas 3 requêtes pour chaque lettre)
3. Vérifier le délai d'attente de ~300ms avant la requête

```javascript
// Console test
// Compter le nombre de requêtes
console.time('search-time');
// ... effectuer la recherche
console.timeEnd('search-time');
```

---

## Notes pour les Développeurs

1. Les indexes de base de données ont été ajoutés pour optimiser les performances
2. Le frontend utilise `distinctUntilChanged()` pour éviter les requêtes en doublon
3. Les images sont chargées à partir du cache si possible (déjà dans le service)
4. Le composant `ChampionSearchComponent` est complètement réutilisable
