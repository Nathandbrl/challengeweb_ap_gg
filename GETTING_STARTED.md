# 🚀 Guide de Démarrage - AP.GG

## Prérequis Système

### Obligatoires
- **PostgreSQL 16+** : [Télécharger](https://www.postgresql.org/download/)
- **PHP 8.2+** : [Télécharger](https://www.php.net/downloads)
- **Node.js 18+** : [Télécharger](https://nodejs.org/)
- **Composer** : [Installer](https://getcomposer.org/)

### Optionnels (mais recommandés)
- **DBeaver** ou **pgAdmin** : Gestionnaire PostgreSQL
- **Postman** : Tester les API endpoints
- **VS Code** : Éditeur de code

---

## ⚙️ Configuration Initiale

### 1. Base de Données PostgreSQL

Vérifiez que PostgreSQL est en cours d'exécution :

```powershell
# Tester la connexion
psql -U postgres -h localhost
```

La configuration est dans `.env` du backend :
```
DATABASE_URL="postgresql://postgres:Chanel01+@127.0.0.1:5432/ap_gg"
```

---

## 🏃 Lancer le Projet

### Terminal 1 : Backend Symfony

```powershell
cd ap_gg_back_end

# Installation des dépendances
composer install

# Créer/réinitialiser la base de données
php bin\console doctrine:migrations:migrate --no-interaction

# Charger les données de test
php bin\console doctrine:fixtures:load --no-interaction

# Lancer le serveur
php bin\console server:run
```

**Résultat attendu :**
```
Starting Web Server on http://127.0.0.1:8000
```

### Terminal 2 : Frontend Angular

```powershell
cd ap_gg_front_end

# Installation des dépendances
npm install

# Lancer le serveur Angular
npm start
```

**Résultat attendu :**
```
✔ Compiled successfully.
⠙ Building...

Application bundle generation complete. [4.234 seconds]

Watch mode enabled. Watching for file changes...
```

---

## ✅ Vérifier que tout fonctionne

### 1. Frontend
Ouvrez votre navigateur et allez sur : **http://localhost:4200**

Vous devriez voir :
- Une navbar avec "AP.GG"
- Des onglets : Builds AP, Champions, Recherche

### 2. Backend
Testez l'API avec :
```powershell
curl http://localhost:8000/api/champions
```

Vous devriez recevoir une liste JSON de champions.

### 3. Base de Données
Connectez-vous avec DBeaver ou pgAdmin :
- Host: `localhost`
- Port: `5432`
- Database: `ap_gg`
- User: `postgres`
- Password: `Chanel01+`

Vous devriez voir les tables :
- `champions`
- `items`
- `ap_builds`
- `players`
- `player_statistics`
- `favorite_champions`

---

## 📡 Tester les Endpoints API

### Avec Postman

1. **GET** `http://localhost:8000/api/champions`
   - Récupère tous les champions

2. **GET** `http://localhost:8000/api/builds`
   - Récupère tous les builds AP

3. **GET** `http://localhost:8000/api/builds/champion/Ahri`
   - Récupère les builds AP pour Ahri

4. **GET** `http://localhost:8000/api/players/search?q=SommonerName`
   - Recherche un joueur (testons avec le frontend)

---

## 📁 Structure des Fichiers Importants

```
challengeweb_ap_gg/
├── ap_gg_back_end/
│   ├── src/
│   │   ├── Controller/         ← Les endpoints API
│   │   ├── Entity/             ← Les modèles de données
│   │   └── Repository/         ← Requêtes BD
│   ├── migrations/             ← Schéma BD
│   ├── config/
│   │   └── packages/           ← Config Doctrine, CORS, etc.
│   └── .env                    ← Variables d'environnement
│
├── ap_gg_front_end/
│   ├── src/app/
│   │   ├── components/         ← Composants Angular
│   │   ├── services/           ← Services API
│   │   └── app.routes.ts       ← Routing
│   └── package.json            ← Dépendances npm
│
└── README.md                   ← Doc du projet
```

---

## 🐛 Dépannage

### Problème : "Database connection refused"
```powershell
# Vérifiez que PostgreSQL est en cours d'exécution
# Windows : Services → PostgreSQL
# Linux : sudo systemctl status postgresql
# Mac : brew services list
```

### Problème : "Port 8000 already in use"
```powershell
# Trouvez le processus utilisant le port 8000
netstat -ano | findstr :8000
# Arrêtez-le
taskkill /PID [PID] /F
```

### Problème : "Port 4200 already in use"
```powershell
# Laissez Angular utiliser un autre port
ng serve --port 4201
```

### Problème : "npm: command not found"
- Node.js n'est pas installé
- Redémarrez votre terminal après installation

### Problème : "composer: command not found"
- Composer n'est pas installé
- Ou pas dans le PATH

---

## 💡 Commandes Utiles

### Backend

```powershell
# Voir toutes les routes disponibles
php bin\console debug:router

# Créer une nouvelle entité
php bin\console make:entity

# Créer un nouveau contrôleur
php bin\console make:controller

# Vider le cache
php bin\console cache:clear

# Voir les logs
php bin\console log:tail
```

### Frontend

```powershell
# Générer un nouveau composant
ng generate component nom-composant

# Générer un nouveau service
ng generate service nom-service

# Builder pour la production
ng build --configuration production

# Lancer les tests
ng test
```

---

## 📊 Données de Test

Les champions et builds suivants sont préchargés :

**Champions :**
- Ahri (Mid)
- Annie (Mid)
- Lux (Support)
- Ryze (Mid)
- Syndra (Mid)
- Evelynn (Jungle)

**Builds :**
- Ahri : Build One-Shot
- Annie : Build Full AP
- Lux : Build Poke Support
- Ryze : Build Control
- Syndra : Build Burst

---

## 📚 Ressources Utiles

- [Documentation Symfony](https://symfony.com/doc/current/index.html)
- [Documentation Angular](https://angular.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Doctrine ORM](https://www.doctrine-project.org/projects/doctrine-orm/en/latest/)

---

## 🎯 Prochaines Étapes

1. **Ajouter de vrais champions et items** - Intégrer l'API Riot Games
2. **Authentification** - Ajouter login/register
3. **Ultimate Bravery** - Mode aléatoire
4. **Analyse temps réel** - Webhooks WebSocket
5. **Déploiement** - Docker, Kubernetes, Cloud

---

**Besoin d'aide ?** Créez une issue sur GitHub !

Made with ❤️ for League of Legends players
