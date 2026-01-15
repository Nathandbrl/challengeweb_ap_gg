# 📋 FICHIERS DU PROJET RIFTVISION

## 🎯 Vue d'ensemble

RiftVision est un projet full-stack **Angular + Symfony + PostgreSQL** pour analyser les profils League of Legends et consulter les builds AP optimisés.

---

## 📂 Structure Complète des Fichiers

### 🏠 Racine du Projet
```
challengeweb_ap_gg/
│
├── 📄 README.md                    ← Documentation générale
├── 📄 QUICK_REFERENCE.md           ← Référence rapide (A LIRE!)
├── 📄 GETTING_STARTED.md           ← Guide de démarrage détaillé
├── 📄 API_DOCUMENTATION.md         ← Documentation complète API
├── 📄 PROJECT_STATUS.md            ← État actuel du projet
├── 📄 CHANGELOG.md                 ← Historique des changements
├── 📄 FILES_MANIFEST.md            ← Ce fichier
│
├── 📄 package.json                 ← Scripts npm globaux
├── 📄 docker-compose.yml           ← Configuration Docker
├── 📄 start.bat                    ← Script démarrage Windows
├── 📄 start.sh                     ← Script démarrage Linux/Mac
│
├── 🎨 Cahier des charges RiftVision (1).docx
│
└── .git/                           ← Historique Git
```

---

## 🔧 Backend - Symfony 7.4

### Structure
```
ap_gg_back_end/
│
├── ⚙️ Configuration
│   ├── .env                        ← Variables d'environnement (PRIVÉ)
│   ├── .env.example                ← Template .env
│   ├── composer.json               ← Dépendances PHP
│   ├── composer.lock               ← Versions verrouillées
│   ├── symfony.lock                ← Versions Symfony
│   │
│   └── config/
│       ├── bundles.php             ← Bundles activés
│       ├── routes.yaml             ← Configuration routes
│       ├── services.yaml           ← Configuration services
│       ├── preload.php
│       ├── reference.php
│       │
│       ├── packages/
│       │   ├── cache.yaml          ← Configuration cache
│       │   ├── doctrine.yaml       ← Configuration Doctrine/PostgreSQL
│       │   ├── doctrine_migrations.yaml
│       │   ├── framework.yaml
│       │   ├── nelmio_cors.yaml    ← CORS configuration
│       │   └── routing.yaml
│       │
│       └── routes/
│           └── framework.yaml
│
├── 🗂️ Source Code (src/)
│   └── App/
│       ├── Kernel.php              ← Kernel Symfony
│       │
│       ├── Controller/             ← API Endpoints
│       │   ├── PlayerController.php (5 endpoints)
│       │   │   ├── GET /search?q=
│       │   │   ├── GET /{riotId}
│       │   │   ├── POST /
│       │   │   └── PUT /{id}
│       │   │
│       │   ├── ChampionController.php (3 endpoints)
│       │   │   ├── GET /
│       │   │   ├── GET /{id}
│       │   │   └── GET /role/{role}
│       │   │
│       │   ├── ApBuildController.php (3 endpoints)
│       │   │   ├── GET /
│       │   │   ├── GET /{id}
│       │   │   └── GET /champion/{championName}
│       │   │
│       │   └── PlayerStatisticController.php (1 endpoint)
│       │       └── GET /player/{playerId}
│       │
│       ├── Entity/                 ← Modèles de données
│       │   ├── Player.php          ← Joueur League of Legends
│       │   ├── Champion.php        ← Champion LoL
│       │   ├── Item.php            ← Item du jeu
│       │   ├── ApBuild.php         ← Build AP optimisé
│       │   ├── PlayerStatistic.php ← Stats joueur par champion
│       │   └── FavoriteChampion.php ← Champions favoris
│       │
│       ├── Repository/             ← Requêtes BD
│       │   ├── PlayerRepository.php
│       │   ├── ChampionRepository.php
│       │   ├── ItemRepository.php
│       │   ├── ApBuildRepository.php
│       │   ├── PlayerStatisticRepository.php
│       │   └── FavoriteChampionRepository.php
│       │
│       ├── DataFixtures/           ← Données de test
│       │   └── AppFixtures.php     ← Charges 6 champions + 5 builds
│       │
│       └── Tests/                  ← Tests unitaires
│
├── 📊 Migrations (migrations/)
│   └── Version20260115000000.php   ← Création schéma BD
│       ├── creates: champions, items, ap_builds, players, etc.
│       ├── indexes: pour performance
│       └── constraints: clés étrangères
│
├── 🌐 Public (public/)
│   ├── index.php                   ← Point d'entrée
│   ├── .htaccess
│   └── assets/
│
├── 📦 Vendor (vendor/)             ← Dépendances (auto-généré)
│   ├── symfony/
│   ├── doctrine/
│   ├── nelmio/
│   └── ...
│
├── 🗄️ Var (var/)                   ← Cache et logs
│   ├── cache/
│   └── log/
│
├── 📚 Bin (bin/)
│   └── console                     ← CLI Symfony
│
└── 📄 README.md
```

### Fichiers Clés Backend

**Configuration:**
- `.env` - DB URL, App Secret, CORS
- `config/packages/doctrine.yaml` - PostgreSQL setup
- `config/packages/nelmio_cors.yaml` - CORS permissions

**Code Métier:**
- `src/Entity/*.php` - 6 entities avec relations
- `src/Repository/*.php` - Requêtes optimisées
- `src/Controller/*.php` - 4 contrôleurs API
- `src/DataFixtures/AppFixtures.php` - Données test

**Base de Données:**
- `migrations/Version*.php` - Schéma SQL

---

## 🎨 Frontend - Angular 19

### Structure
```
ap_gg_front_end/
│
├── ⚙️ Configuration
│   ├── package.json                ← Dépendances npm
│   ├── package-lock.json           ← Versions verrouillées
│   ├── tsconfig.json               ← TypeScript config
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   ├── angular.json                ← Angular CLI config
│   ├── karma.conf.js               ← Test runner config
│   └── .angular.json
│
├── 📁 Source Code (src/)
│   ├── index.html                  ← HTML racine
│   ├── main.ts                     ← Bootstrap application
│   ├── main.server.ts              ← Bootstrap SSR
│   ├── server.ts                   ← Express server (SSR)
│   ├── styles.css                  ← Styles globaux
│   │
│   └── app/                        ← Application Angular
│       │
│       ├── 🧩 Composants (components/)
│       │   │
│       │   ├── search-player/
│       │   │   ├── search-player.component.ts        ← Logique
│       │   │   ├── search-player.component.html      ← Template
│       │   │   └── search-player.component.css       ← Styles
│       │   │   Fonctionnalités:
│       │   │   - Barre de recherche
│       │   │   - Affiche profil joueur
│       │   │   - Rank, LP, Wins/Losses, Win Rate
│       │   │
│       │   ├── champions-list/
│       │   │   ├── champions-list.component.ts       ← Logique
│       │   │   ├── champions-list.component.html     ← Template
│       │   │   └── champions-list.component.css      ← Styles
│       │   │   Fonctionnalités:
│       │   │   - Liste tous les champions
│       │   │   - Filtrage par rôle (tabs)
│       │   │   - Affiche pick/win rates
│       │   │   - Grid responsive
│       │   │
│       │   └── ap-builds/
│       │       ├── ap-builds.component.ts            ← Logique
│       │       ├── ap-builds.component.html          ← Template
│       │       └── ap-builds.component.css           ← Styles
│       │       Fonctionnalités:
│       │       - Liste builds AP
│       │       - Détails items
│       │       - AP total et coût
│       │       - Tips & astuces
│       │
│       ├── 🔗 Services (services/)
│       │   ├── player.service.ts          ← API Player
│       │   │   └── Endpoints: search, getByRiotId, create, update
│       │   │
│       │   ├── champion.service.ts        ← API Champions
│       │   │   └── Endpoints: list, getById, getByRole
│       │   │
│       │   ├── ap-build.service.ts        ← API Builds AP
│       │   │   └── Endpoints: list, getById, getByChampion
│       │   │
│       │   └── player-statistic.service.ts ← API Stats
│       │       └── Endpoints: getByPlayer
│       │
│       ├── 🌍 Environnements (environments/)
│       │   ├── environment.ts             ← Dev: localhost:8000
│       │   └── environment.prod.ts        ← Prod: api.riftvision.com
│       │
│       ├── 📱 Composants Principaux
│       │   ├── app.component.ts           ← Root component avec navbar
│       │   ├── app.component.html         ← Template navbar + router
│       │   ├── app.component.css          ← Styles navbar
│       │   │
│       │   ├── app.routes.ts              ← Configuration routing
│       │   │   └── Routes: /, /search, /champions, /builds
│       │   │
│       │   ├── app.config.ts              ← App config
│       │   │   └── Provides: router, HTTP, hydration
│       │   │
│       │   └── app.config.server.ts       ← SSR config
│       │
│       ├── Tests
│       │   ├── search-player.component.spec.ts
│       │   ├── champions-list.component.spec.ts
│       │   ├── ap-builds.component.spec.ts
│       │   └── app.component.spec.ts
│       │
│       └── ...
│
├── 📊 Public (public/)
│   └── assets/                     ← Images, icônes, etc.
│
├── 📦 Node Modules (node_modules/) ← Dépendances (auto-généré)
│   ├── @angular/
│   ├── @angular/material/
│   ├── rxjs/
│   ├── tslib/
│   ├── zone.js/
│   └── ...
│
├── 🧪 Tests
│   ├── karma.conf.js
│   ├── test.ts
│   └── **/*.spec.ts files
│
└── 📄 README.md
```

### Fichiers Clés Frontend

**Configuration:**
- `angular.json` - Configuration Angular CLI
- `tsconfig.json` - Configuration TypeScript
- `package.json` - Dépendances npm
- `environments/environment.ts` - API URL dev

**Code Principal:**
- `src/app/app.component.ts` - Navbar et router
- `src/app/app.routes.ts` - Routing configuration

**Composants:**
- `src/app/components/search-player/` - Recherche joueur
- `src/app/components/champions-list/` - Liste champions
- `src/app/components/ap-builds/` - Builds AP

**Services:**
- `src/app/services/*.service.ts` - 4 services API

---

## 🗄️ Base de Données

### Tables PostgreSQL

```sql
champions
├── id (PK)
├── name (UNIQUE)
├── title
├── description
├── role
├── imageUrl
├── pickRate
├── winRate
├── riotId
└── createdAt

items
├── id (PK)
├── name (UNIQUE)
├── description
├── gold
├── apBonus (INDEX)
├── otherBonus
├── imageUrl
├── riotId
└── createdAt

ap_builds
├── id (PK)
├── champion_id (FK)
├── name
├── description
├── winRate
├── pickCount
├── difficulty
├── tips
├── priority
├── isActive (INDEX)
├── createdAt
└── updatedAt

ap_build_items (JUNCTION)
├── ap_build_id (FK, PK)
└── item_id (FK, PK)

players
├── id (PK)
├── riotId (UNIQUE, INDEX)
├── summonerName (INDEX)
├── tagLine
├── profileIconUrl
├── summonerLevel
├── rank
├── tier
├── leaguePoints
├── wins
├── losses
├── createdAt
└── updatedAt

player_statistics
├── id (PK)
├── player_id (FK, INDEX, UNIQUE avec champion_id)
├── champion_id (FK, INDEX)
├── gamesPlayed
├── wins
├── winRate
├── avgKills
├── avgDeaths
├── avgAssists
├── avgCsPerMin
├── avgGoldPerMin
├── createdAt
└── updatedAt

favorite_champions
├── id (PK)
├── player_id (FK)
├── champion_id (FK)
├── addedAt
└── UNIQUE(player_id, champion_id)
```

### Données Pré-chargées

**Champions (6):**
1. Ahri (Mid)
2. Annie (Mid)
3. Lux (Support)
4. Ryze (Mid)
5. Syndra (Mid)
6. Evelynn (Jungle)

**Items (10):**
1. Bâton de Séraph (80 AP)
2. Coiffe Mortelle (90 AP)
3. Capuchon de Rabadon (120 AP)
4. Sablier de Zhonya (65 AP)
5. Etc. (voir fixtures)

**Builds (5):**
- Ahri: Build One-Shot
- Annie: Build Full AP
- Lux: Build Poke Support
- Ryze: Build Control
- Syndra: Build Burst

---

## 📝 Documentation

```
Documentation/
├── README.md                       ← Overview général (100+ lignes)
├── QUICK_REFERENCE.md             ← Référence rapide (100+ lignes)
├── GETTING_STARTED.md             ← Guide complet démarrage (200+ lignes)
├── API_DOCUMENTATION.md           ← Documentation API détaillée (300+ lignes)
├── PROJECT_STATUS.md              ← État du projet (400+ lignes)
├── CHANGELOG.md                   ← Historique changements
└── FILES_MANIFEST.md              ← Ce fichier
```

---

## 🔐 Fichiers de Configuration

```
Configuration/
├── .env                           ← Variables env (PRIVÉ)
├── .env.example                   ← Template .env
├── .gitignore                     ← Fichiers ignorés Git
├── docker-compose.yml             ← Docker configuration
├── start.bat                      ← Script démarrage Windows
├── start.sh                       ← Script démarrage Unix
└── package.json                   ← Scripts npm
```

---

## 🧪 Données de Test

**Seed Data (AppFixtures.php):**
- 6 champions avec stats
- 10 items AP avec bonus
- 5 builds AP configurés
- Statistiques pré-générées

**Chargement:**
```bash
php bin/console doctrine:fixtures:load
```

---

## 📦 Dépendances Principales

### Backend (Symfony)
```json
{
  "doctrine/orm": "^3.6",
  "doctrine/doctrine-bundle": "^2.18",
  "symfony/framework-bundle": "7.4.*",
  "symfony/console": "7.4.*",
  "nelmio/cors-bundle": "^2.6"
}
```

### Frontend (Angular)
```json
{
  "@angular/core": "^19.2.0",
  "@angular/material": "^19.2.19",
  "@angular/router": "^19.2.0",
  "@angular/forms": "^19.2.0",
  "rxjs": "~7.8.0"
}
```

---

## 🚀 Scripts de Démarrage

### Windows
```batch
start.bat          ← Double-cliquez pour démarrer
```

### Linux/Mac
```bash
bash start.sh
```

### Manuel
```bash
# Terminal 1 - Backend
cd ap_gg_back_end
php -S 127.0.0.1:8000 -t public

# Terminal 2 - Frontend
cd ap_gg_front_end
npm start
```

### Docker
```bash
docker-compose up
```

---

## 📊 Statistiques du Projet

| Métrique | Valeur |
|----------|--------|
| Fichiers TS/JS | 20+ |
| Fichiers CSS | 5+ |
| Fichiers PHP | 15+ |
| Endpoints API | 12 |
| Composants Angular | 3 |
| Services Angular | 4 |
| Entities Doctrine | 6 |
| Tables DB | 7 |
| Lignes de code | 5000+ |
| Fichiers documentations | 7 |

---

## ✅ Checklist Setup

- [x] Entities Doctrine créées
- [x] Migrations BD
- [x] Repositories
- [x] Contrôleurs API
- [x] Composants Angular
- [x] Services API
- [x] Routing
- [x] Material Design
- [x] Responsive CSS
- [x] Documentation
- [x] Données test

---

## 🔗 Ressources Rapides

| Ressource | Lien |
|-----------|------|
| Frontend | http://localhost:4200 |
| Backend API | http://localhost:8000/api |
| PostgreSQL | localhost:5432 |
| Source Backend | `ap_gg_back_end/src/` |
| Source Frontend | `ap_gg_front_end/src/app/` |
| Configuration DB | `ap_gg_back_end/.env` |
| API URLs | `ap_gg_front_end/src/environments/` |

---

## 📝 Notes

- Tous les fichiers sont documentés avec commentaires
- Code suit les standards Angular et Symfony
- Material Design pour UI cohérente
- Responsive design mobile-first
- CORS configuré pour développement local

---

**Generated:** 15 Janvier 2026  
**Version:** 1.0.0  
**Project:** RiftVision  

Made with ❤️ for League of Legends players
