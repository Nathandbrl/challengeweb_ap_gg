# Documentation Technique - AP.GG

Ce document détaille l'architecture et les implémentations clés du projet AP.GG, une plateforme de builds "troll" 100% AP pour League of Legends.

---

##  Architecture Globale

Le projet est divisé en deux parties distinctes :
1.  **Backend (ap_gg_back_end)** : Une API REST robuste sous NestJS utilisant Prisma pour la gestion de la base de données PostgreSQL.
2.  **Frontend (ap_gg_front_end)** : Une interface moderne sous Angular (v19) avec Angular Material pour un design premium style "op.gg".

---

## 🔙 Backend (NestJS & Prisma)

### 1. Modèle de Données (Prisma)
Le fichier [schema.prisma](file:///c:/Users/natha/OneDrive/Documents/code/challengeweb_ap_gg/ap_gg_back_end/prisma/schema.prisma) définit les relations entre :
- `champions` : Stocke les noms, titres et rôles.
- `ap_builds` : Contient les builds (nom, win rate, difficulté).
- `items` : Référence les objets avec leur `riot_id`.

### 2. Service de Builds
Le [builds.service.ts](file:///c:/Users/natha/OneDrive/Documents/code/challengeweb_ap_gg/ap_gg_back_end/src/builds/builds.service.ts) est crucial car il transforme les données brutes de la base (snake_case) en format compatible avec le frontend (camelCase) :
```typescript
async findAll() {
    const builds = await this.prisma.ap_builds.findMany({
        include: { champions: true, ap_build_items: { include: { items: true } } },
    });
    return builds.map(build => ({
        ...build,
        champion: { name: build.champions.name },
        items: build.ap_build_items.map(bi => ({
            riotId: bi.items.riot_id,
            // ...mapping
        }))
    }));
}
```

---

## 🎨 Frontend (Angular & Material)

### 1. Intégration Riot Data Dragon
Pour éviter de stocker des milliers d'images, nous utilisons le CDN officiel de Riot. La normalisation des noms est essentielle :
- **Lux** → `Lux`
- **Dr. Mundo** → `DrMundo`
- **Wukong** → `MonkeyKing` (exception historique de Riot)

### 2. Page d'Accueil (ApBuildsComponent)
Cette page affiche les builds récents. Elle intègre un **générateur de builds de secours** :
- **Logique** : Si un build en base de données est incomplet, le composant injecte dynamiquement 6 objets AP aléatoires pour garantir un rendu visuel impeccable.

### 3. Page Détail (ChampionDetailComponent)
Elle combine deux sources de données :
- **Base de données interne** : Pour le nom et le rôle.
- **API Riot (JSON)** : Récupère les sorts (skills) et les statistiques de base en temps réel.
- **Sécurité** : Utilisation de `rxjs` avec `timeout` pour éviter les blocages si l'API de Riot est lente.

### 4. Design Responsif (Mobile & Tablette)
Le site utilise une approche "Adaptive Layout" via des **Media Queries de pointe** :
- **Flexbox & Grid** : Utilisation intensive de `display: flex` et `display: grid` pour des réarrangements automatiques.
- **Breakpoints stratégiques** :
    - **768px** : La navbar bascule en mode vertical et les grilles de champions s'adaptent (2 colonnes).
    - **900px** : Les barres latérales (sidebars) passent sous le contenu principal pour maximiser la lisibilité.
    - **Scaling dynamiques** : Les titres Hero et les icônes de champions se réduisent proportionnellement sur mobile pour éviter tout débordement.

---

## 🛠️ Points Clés du Code

- **Thème Sombre Global** : Défini dans [styles.css](file:///c:/Users/natha/OneDrive/Documents/code/challengeweb_ap_gg/ap_gg_front_end/src/styles.css) avec des overrides pour les composants Material (Cards, Toolbars, Inputs).
- **Gestion des Erreurs Images** : Utilisation de `onerror="this.onerror=null; this.src='assets/default-champion.png'"` pour éviter les boucles infinies de 404.
- **Standalone Components** : Le projet utilise la structure moderne d'Angular sans `NgModule`, facilitant le lazy loading et la maintenance.

---

*Documentation générée par Antigravity pour Nathaniel.*
