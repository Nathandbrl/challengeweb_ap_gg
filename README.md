# AP.GG 🎮

AP.GG est une plateforme web d'analyse League of Legends simple et pédagogique, permettant aux joueurs de comprendre leurs performances et d'optimiser leur gameplay avec des builds AP optimisés.

## 🎯 Concept

AP.GG propose une version personnalisée d'op.gg avec un focus spécifique sur les **builds AP (Ability Power)** pour les champions de League of Legends. Le projet combine :
- 📊 **Analyse de profil** : Recherche et statistiques des joueurs
- 🏆 **Champions & Builds** : Listes de champions avec builds AP optimisés
- 💡 **Ultimate Bravery** : Mode aléatoire pour challenger les joueurs (bientôt)

## 📋 Architecture

### Backend (Symfony 7.4)
```
ap_gg_back_end/
├── src/
│   ├── Controller/
│   │   ├── PlayerController.php          # API Joueurs
│   │   ├── ChampionController.php        # API Champions
│   │   ├── ApBuildController.php         # API Builds AP
│   │   └── PlayerStatisticController.php # API Statistiques
│   ├── Entity/
│   │   ├── Player.php
│   │   ├── Champion.php
│   │   ├── Item.php
│   │   ├── ApBuild.php
│   │   ├── PlayerStatistic.php
│   │   └── FavoriteChampion.php
│   └── Repository/
│       └── [Repositories pour chaque Entity]
├── migrations/
│   └── Version20260115000000.php         # Migration DB initiale
└── config/
    ├── packages/
    │   ├── doctrine.yaml                 # Config PostgreSQL
    │   └── nelmio_cors.yaml              # CORS configuration
```

### Frontend (Angular 19)
```
ap_gg_front_end/
├── src/app/
│   ├── components/
│   │   ├── search-player/                # Recherche de joueurs
│   │   ├── champions-list/               # Liste des champions
│   │   └── ap-builds/                    # Affichage des builds AP
│   ├── services/
│   │   ├── player.service.ts
│   │   ├── champion.service.ts
│   │   ├── ap-build.service.ts
│   │   └── player-statistic.service.ts
│   ├── app.routes.ts                     # Routing
│   └── app.component.ts                  # Component principal
```

## 🗄️ Base de Données

### PostgreSQL (v16)
La base de données contient les tables suivantes :

- **champions** : Données des champions LoL
- **items** : Items avec bonus AP
- **ap_builds** : Builds AP optimisés par champion
- **ap_build_items** : Relation Many-to-Many (Build ↔ Items)
- **players** : Profils des joueurs
- **player_statistics** : Stats des joueurs par champion
- **favorite_champions** : Champions favoris des joueurs

## 🚀 Démarrage Rapide

### Backend (Symfony)

**Prérequis :**
- PHP 8.2+
- PostgreSQL 16+
- Composer

**Installation :**
```bash
cd ap_gg_back_end
composer install
php bin/console doctrine:migrations:migrate
php bin/console server:run
```

**L'API sera disponible sur :** `http://localhost:8000/api`

### Frontend (Angular)

**Prérequis :**
- Node.js 18+
- npm ou yarn

**Installation :**
```bash
cd ap_gg_front_end
npm install
npm start
```

**L'app sera disponible sur :** `http://localhost:4200`

## 📡 Endpoints API

### Players
- `GET /api/players/search?q={summonerName}` - Rechercher un joueur
- `GET /api/players/{riotId}` - Obtenir un joueur par Riot ID
- `POST /api/players` - Créer un joueur
- `PUT /api/players/{id}` - Mettre à jour un joueur

### Champions
- `GET /api/champions` - Lister tous les champions
- `GET /api/champions/{id}` - Obtenir un champion
- `GET /api/champions/role/{role}` - Filtrer par rôle

### Builds AP
- `GET /api/builds` - Lister tous les builds
- `GET /api/builds/{id}` - Obtenir un build
- `GET /api/builds/champion/{championName}` - Builds d'un champion

### Statistiques
- `GET /api/statistics/player/{playerId}` - Stats d'un joueur

## 🔧 Configuration

### Environment Variables

**Backend (`.env`):**
```env
APP_ENV=dev
DATABASE_URL="postgresql://postgres:PASSWORD@127.0.0.1:5432/ap_gg"
CORS_ALLOW_ORIGIN='^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$'
```

**Frontend (`environment.ts`):**
```typescript
export const environment = {
  apiUrl: 'http://localhost:8000/api'
};
```

## 📱 Fonctionnalités Principales

- ✅ **Recherche de profil** : Trouvez n'importe quel joueur
- ✅ **Stats détaillées** : Winrate, KDA, CS/min, etc.
- ✅ **Builds optimisés** : Builds AP pour chaque champion
- ✅ **Champions filtrage** : Filtrez par rôle
- ⏳ **Ultimate Bravery** : Mode aléatoire (coming soon)
- ⏳ **Analyse en temps réel** : Conseils personnalisés (coming soon)

## 🛠️ Stack Technologique

| Layer | Technologies |
|-------|--------------|
| **Frontend** | Angular 19, TypeScript, Material Design, RxJS |
| **Backend** | Symfony 7.4, PHP 8.2, Doctrine ORM |
| **Database** | PostgreSQL 16 |
| **API** | RESTful, JSON |
| **CORS** | Nelmio CORS Bundle |

## 📚 Dépendances Principales

### Backend
- `symfony/framework-bundle` - Framework Symfony
- `doctrine/orm` - ORM Doctrine
- `doctrine/doctrine-migrations-bundle` - Migrations DB
- `nelmio/cors-bundle` - CORS support

### Frontend
- `@angular/core` - Angular core
- `@angular/material` - Material Design components
- `@angular/cdk` - Component Dev Kit
- `rxjs` - Reactive programming

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push à la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Cahier des Charges

Le projet est basé sur un cahier des charges complet disponible dans le dossier racine.

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue sur GitHub.

## 📄 License

Ce projet est sous licence propriétaire. © 2026 AP.GG

---

**Made with ❤️ for League of Legends players**
