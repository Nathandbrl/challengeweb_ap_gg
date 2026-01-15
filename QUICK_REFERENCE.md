# 🚀 Quick Reference - AP.GG

## ⚡ Démarrage Express (5 minutes)

### 1️⃣ Backend (Terminal 1)
```powershell
cd ap_gg_back_end
composer install
php bin\console doctrine:migrations:migrate --no-interaction
php bin\console doctrine:fixtures:load --no-interaction
php bin\console server:run
```
✅ API disponible sur: **http://localhost:8000/api**

### 2️⃣ Frontend (Terminal 2)
```powershell
cd ap_gg_front_end
npm install
npm start
```
✅ App disponible sur: **http://localhost:4200**

---

## 📁 Structure Clé

```
ap_gg_back_end/
├── src/Controller/      ← Endpoints API
├── src/Entity/          ← Modèles de données
├── migrations/          ← Schéma BD
└── .env                 ← Configuration DB

ap_gg_front_end/
├── src/app/components/  ← Pages UI
├── src/app/services/    ← Appels API
└── src/app/app.routes   ← Navigation
```

---

## 🔗 Endpoints API

### Players
```
GET  /api/players/search?q=SummonerName
GET  /api/players/{riotId}
POST /api/players
PUT  /api/players/{id}
```

### Champions
```
GET /api/champions
GET /api/champions/{id}
GET /api/champions/role/{role}
```

### Builds AP
```
GET /api/builds
GET /api/builds/{id}
GET /api/builds/champion/{championName}
```

### Stats
```
GET /api/statistics/player/{playerId}
```

---

## 🎨 Pages disponibles

| Page | Route | Description |
|------|-------|-------------|
| Builds AP | `/builds` | Tous les builds optimisés |
| Champions | `/champions` | Liste champions + filtres |
| Recherche | `/search` | Chercher un joueur |

---

## 🗄️ Base de Données

### Connexion
- **Host**: localhost
- **Port**: 5432
- **Database**: ap_gg
- **User**: postgres
- **Password**: Chanel01+

### Tables
- `champions` - Champions LoL
- `items` - Items AP
- `ap_builds` - Builds optimisés
- `players` - Profils joueurs
- `player_statistics` - Stats joueur
- `favorite_champions` - Favoris
- `ap_build_items` - Junction table

---

## 🔑 Variables d'Environnement

### Backend (.env)
```env
DATABASE_URL=postgresql://postgres:Chanel01+@localhost:5432/ap_gg
APP_ENV=dev
CORS_ALLOW_ORIGIN=^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$
```

### Frontend (environment.ts)
```typescript
apiUrl: 'http://localhost:8000/api'
```

---

## 🛠️ Commandes Utiles

### Symfony
```powershell
# Debug routes
php bin\console debug:router

# Réinitialiser la BD
php bin\console doctrine:database:drop --force
php bin\console doctrine:database:create
php bin\console doctrine:migrations:migrate --no-interaction

# Charger données test
php bin\console doctrine:fixtures:load --no-interaction

# Vider cache
php bin\console cache:clear
```

### Angular
```powershell
# Nouveau composant
ng generate component nom

# Nouveau service
ng generate service nom

# Build production
ng build --configuration production

# Tests
ng test
```

---

## 🧪 Test API avec cURL

```bash
# Champions
curl http://localhost:8000/api/champions

# Builds Ahri
curl http://localhost:8000/api/builds/champion/Ahri

# Chercher joueur
curl "http://localhost:8000/api/players/search?q=Doublelift"
```

---

## 📊 Stack Technique

| Layer | Technology |
|-------|-----------|
| **Frontend** | Angular 19 + Material Design |
| **Backend** | Symfony 7.4 + Doctrine |
| **Database** | PostgreSQL 16 |
| **API** | RESTful JSON |
| **CORS** | Nelmio Bundle |

---

## ✅ Checklist Démarrage

- [ ] PostgreSQL en cours d'exécution
- [ ] Backend composer install ✅
- [ ] Migrations BD appliquées ✅
- [ ] Données test chargées ✅
- [ ] Backend serveur lancé → http://localhost:8000
- [ ] Frontend npm install ✅
- [ ] Frontend serveur lancé → http://localhost:4200
- [ ] Navbar visible
- [ ] API endpoints répondent

---

## 🐛 Troubleshooting

| Problème | Solution |
|----------|----------|
| "DB connection refused" | `psql -U postgres` pour tester |
| "Port 8000 already in use" | `netstat -ano \| findstr :8000` |
| "npm not found" | Installer Node.js et redémarrer terminal |
| "Composer not found" | Installer Composer |
| "404 API endpoint" | Vérifier `php bin\console debug:router` |

---

## 📚 Documentation

- **README.md** - Overview complet
- **GETTING_STARTED.md** - Guide détaillé
- **API_DOCUMENTATION.md** - Endpoints detaillés
- **PROJECT_STATUS.md** - État du projet

---

## 🚀 Prochaines Features

1. Intégration Riot Games API
2. Authentification JWT
3. Ultimate Bravery mode
4. Analyse temps réel
5. Tests automatisés

---

## 💡 Conseils Pro

✅ **Utilisez Postman** pour tester les API  
✅ **Activez JSON Viewer** dans le navigateur  
✅ **Utilisez DBeaver** pour visualiser la BD  
✅ **Commitez régulièrement** sur Git  
✅ **Lisez les logs** du backend et frontend  

---

**Made with ❤️ for League of Legends**

Last Updated: 15 Janvier 2026
