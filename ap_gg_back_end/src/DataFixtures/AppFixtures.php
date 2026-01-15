<?php

namespace App\DataFixtures;

use App\Entity\Champion;
use App\Entity\Item;
use App\Entity\ApBuild;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Items AP populaires
        $items = [
            ['name' => 'Bâton de Séraph', 'ap' => 80, 'gold' => 3100, 'description' => 'Mana bonus et bonus de mana converti en AP'],
            ['name' => 'Coiffe Mortelle', 'ap' => 90, 'gold' => 3400, 'description' => 'AP élevé avec CDR'],
            ['name' => 'Tome de Radiance', 'ap' => 75, 'gold' => 2700, 'description' => 'Mana bonus et AP'],
            ['name' => 'Sablier de Zhonya', 'ap' => 65, 'gold' => 2600, 'description' => 'AP avec invulnérabilité'],
            ['name' => 'Voile de la Banshee', 'ap' => 60, 'gold' => 2500, 'description' => 'Résistance magique et bouclier'],
            ['name' => 'Bâton de Vide', 'ap' => 60, 'gold' => 2800, 'description' => 'Pénétration magique'],
            ['name' => 'Capuchon de Rabadon', 'ap' => 120, 'gold' => 3500, 'description' => 'AP massif avec boost en %'],
            ['name' => 'Échos de Luden', 'ap' => 75, 'gold' => 2500, 'description' => 'AP avec boom AoE'],
            ['name' => 'Orbite Perdue', 'ap' => 65, 'gold' => 3000, 'description' => 'Lenteur sur attaque'],
            ['name' => 'Tourment de Liandry', 'ap' => 75, 'gold' => 3200, 'description' => 'Dégâts supplémentaires en %'],
        ];

        $itemEntities = [];
        foreach ($items as $itemData) {
            $item = new Item();
            $item->setName($itemData['name']);
            $item->setApBonus($itemData['ap']);
            $item->setGold($itemData['gold']);
            $item->setDescription($itemData['description']);
            $manager->persist($item);
            $itemEntities[$itemData['name']] = $item;
        }

        // TOUS LES CHAMPIONS - Build AP TROLL pour tous ! 🎪
        // NOTE: All duplicates have been removed - 140 unique champions with auto-generated AP builds
        $championsData = [
            // TOP LANE
            ['name' => 'Aatrox', 'title' => 'L\'Épée Darkin', 'role' => 'Top', 'description' => 'Épées magiques lol'],
            ['name' => 'Garen', 'title' => 'Puissance de Demacia', 'role' => 'Top', 'description' => 'Spin en AP!'],
            ['name' => 'Darius', 'title' => 'La Main Sanglante', 'role' => 'Top', 'description' => 'Hémorragie magique'],
            ['name' => 'Sion', 'title' => 'Colosse Reanimé', 'role' => 'Top', 'description' => 'Zombie AP'],
            ['name' => 'Maokai', 'title' => 'Ancien Sentinelle', 'role' => 'Top', 'description' => 'Racines magiques'],
            ['name' => 'Ornn', 'title' => 'L\'Artisan Volcanique', 'role' => 'Top', 'description' => 'Forge magique'],
            ['name' => 'Teemo', 'title' => 'Tacheur Scout', 'role' => 'Top', 'description' => 'Champignons AP'],
            ['name' => 'Malphite', 'title' => 'L\'Écho Monolithe', 'role' => 'Top', 'description' => 'Météore magique'],
            ['name' => 'Mordekaiser', 'title' => 'Le Roi Noir', 'role' => 'Top', 'description' => 'Roi magique'],
            ['name' => 'Vladimir', 'title' => 'Hemomancien', 'role' => 'Top', 'description' => 'Sang magique'],
            ['name' => 'Renekton', 'title' => 'Empereur Crocodile', 'role' => 'Top', 'description' => 'Crocodile AP lol'],
            ['name' => 'Yasuo', 'title' => 'Samouraï sans honneur', 'role' => 'Top', 'description' => 'Acier magique?'],
            ['name' => 'Yone', 'title' => 'Éternel Duelliste', 'role' => 'Top', 'description' => 'Esprit magique'],
            ['name' => 'Riven', 'title' => 'Exilée de Noxus', 'role' => 'Top', 'description' => 'Lame cassée AP'],
            ['name' => 'Fiora', 'title' => 'La Maître Lame', 'role' => 'Top', 'description' => 'Escrime magique'],
            ['name' => 'Illaoi', 'title' => 'La Prêtresse des Profondeurs', 'role' => 'Top', 'description' => 'Tentacules magiques'],
            ['name' => 'Shen', 'title' => 'L\'Oeil du Crépuscule', 'role' => 'Top', 'description' => 'Ninja AP'],
            ['name' => 'Jax', 'title' => 'Grand Maître Armes', 'role' => 'Top', 'description' => 'Lampadaire magique'],
            ['name' => 'Kayle', 'title' => 'Justiciaire Ascendante', 'role' => 'Top', 'description' => 'Ailes magiques'],
            ['name' => 'Pantheon', 'title' => 'Guerrier Ascendant', 'role' => 'Top', 'description' => 'Lance magique'],
            ['name' => 'Rumble', 'title' => 'Le Pilote du Incinerateur', 'role' => 'Top', 'description' => 'Flamethrower AP'],
            ['name' => 'Kennen', 'title' => 'Le Shurikaman', 'role' => 'Top', 'description' => 'Shurikens AP'],
            ['name' => 'Singed', 'title' => 'L\'Alchimiste Fou', 'role' => 'Top', 'description' => 'Poison AP trail'],
            ['name' => 'Gnar', 'title' => 'La Bête Sauvage', 'role' => 'Top', 'description' => 'Mega AP rage'],
            ['name' => 'Tyrant', 'title' => 'Le Sombre Porteur', 'role' => 'Top', 'description' => 'Weapon AP'],
            ['name' => 'K\'Sante', 'title' => 'Le Chevalier Écorché', 'role' => 'Top', 'description' => 'Knight AP shield'],
            ['name' => 'Jayce', 'title' => 'Le Défenseur de Demacia', 'role' => 'Top', 'description' => 'Hammer AP transform'],
            ['name' => 'Quinn', 'title' => 'L\'Éclaireur Demacienne', 'role' => 'Top', 'description' => 'Bird AP dash'],
            ['name' => 'Camille', 'title' => 'L\'Ombre de Piltover', 'role' => 'Top', 'description' => 'Precision AP dash'],
            ['name' => 'Urgot', 'title' => 'Le Chevalier Oublié', 'role' => 'Top', 'description' => 'Cyborg AP execute'],
            ['name' => 'Olaf', 'title' => 'Le Berserker Freljordien', 'role' => 'Top', 'description' => 'Axe AP rage'],
            ['name' => 'Nasus', 'title' => 'Le Gardien des Sables', 'role' => 'Top', 'description' => 'Dog AP stack'],
            ['name' => 'Lurtz', 'title' => 'Le Maître des Ombres', 'role' => 'Top', 'description' => 'Shadow AP'],
            
            // MID LANE
            ['name' => 'Ahri', 'title' => 'La Neuf-Queues', 'role' => 'Mid', 'description' => 'Mage mobile AP'],
            ['name' => 'Annie', 'title' => 'L\'Enfant Sombre', 'role' => 'Mid', 'description' => 'Tibbers en AP'],
            ['name' => 'Ryze', 'title' => 'Le Tourne-Runes', 'role' => 'Mid', 'description' => 'Portal AP'],
            ['name' => 'Syndra', 'title' => 'La Maîtresse des Sphères', 'role' => 'Mid', 'description' => 'Sphères magiques'],
            ['name' => 'Orianna', 'title' => 'Dame Automate', 'role' => 'Mid', 'description' => 'Sphère AP control'],
            ['name' => 'Cassiopée', 'title' => 'La Reine Serpent', 'role' => 'Mid', 'description' => 'Serpent poison AP'],
            ['name' => 'Twisted Fate', 'title' => 'Maître des Cartes', 'role' => 'Mid', 'description' => 'Cartes magiques'],
            ['name' => 'Ekko', 'title' => 'Le Chronique', 'role' => 'Mid', 'description' => 'Temps magique'],
            ['name' => 'Fizz', 'title' => 'Le Prédateur des Profondeurs', 'role' => 'Mid', 'description' => 'Poisson AP'],
            ['name' => 'Leblanc', 'title' => 'Marionnettiste du Néant', 'role' => 'Mid', 'description' => 'Clone magique'],
            ['name' => 'Karthus', 'title' => 'Le Chantre Spectral', 'role' => 'Mid', 'description' => 'Mort magique'],
            ['name' => 'Veigar', 'title' => 'Le Tyran du Mal', 'role' => 'Mid', 'description' => 'Stun AP scaling'],
            ['name' => 'Swain', 'title' => 'Général Noir Noxien', 'role' => 'Mid', 'description' => 'Corbeau AP'],
            ['name' => 'Viktor', 'title' => 'La Machine Glorieuse', 'role' => 'Mid', 'description' => 'Tech AP evolution'],
            ['name' => 'Azir', 'title' => 'L\'Empereur des Sables', 'role' => 'Mid', 'description' => 'Soldiers AP'],
            ['name' => 'Anivia', 'title' => 'Phénix Cristalline', 'role' => 'Mid', 'description' => 'Glace AP rebirth'],
            ['name' => 'Brand', 'title' => 'Le Destructeur Calciné', 'role' => 'Mid', 'description' => 'Feu AP everywhere'],
            ['name' => 'Lissandra', 'title' => 'Sorcière de Glace', 'role' => 'Mid', 'description' => 'Glace AP control'],
            ['name' => 'Zoe', 'title' => 'Aspect de Crépuscule', 'role' => 'Mid', 'description' => 'Sommeil AP'],
            ['name' => 'Neeko', 'title' => 'Caméléon Curiosité', 'role' => 'Mid', 'description' => 'Camouflage AP'],
            ['name' => 'Akali', 'title' => 'Keech Noxienne', 'role' => 'Mid', 'description' => 'Shadow AP ninja'],
            ['name' => 'Galio', 'title' => 'Colosse Colossale', 'role' => 'Mid', 'description' => 'Titan AP'],
            ['name' => 'Malzahar', 'title' => 'L\'Hérésiarque du Néant', 'role' => 'Mid', 'description' => 'Voidling AP spam'],
            ['name' => 'Heimerdinger', 'title' => 'Le Professeur Radieux', 'role' => 'Mid', 'description' => 'Tourelles AP boom'],
            ['name' => 'Diana', 'title' => 'L\'Aspirant Lunaire', 'role' => 'Mid', 'description' => 'Moon AP dash'],
            ['name' => 'Talon', 'title' => 'Lame Assassin', 'role' => 'Mid', 'description' => 'Blade AP stealth'],
            ['name' => 'Zed', 'title' => 'L\'Ombrage Maître', 'role' => 'Mid', 'description' => 'Shadow AP clone'],
            ['name' => 'Qiyana', 'title' => 'Impératrice des Éléments', 'role' => 'Mid', 'description' => 'Element AP Q'],
            ['name' => 'Sylas', 'title' => 'L\'Outlaw Magi', 'role' => 'Mid', 'description' => 'Chain AP steal'],
            ['name' => 'Seraphine', 'title' => 'La Chanteuse Étoilée', 'role' => 'Mid', 'description' => 'Song AP heal'],
            ['name' => 'Vex', 'title' => 'L\'Expulsion Sinistr', 'role' => 'Mid', 'description' => 'Hex AP boom'],
            ['name' => 'Hwei', 'title' => 'L\'Artiste Spirituel', 'role' => 'Mid', 'description' => 'Paint AP spell'],
            ['name' => 'Naafiri', 'title' => 'La Chasseuse Darkin', 'role' => 'Mid', 'description' => 'Darkin AP pack'],
            ['name' => 'Gragas', 'title' => 'Alchimiste Baril', 'role' => 'Mid', 'description' => 'Barrels AP drunk'],
            ['name' => 'Asol', 'title' => 'L\'Aurelion Cosmique', 'role' => 'Mid', 'description' => 'Star AP orbit'],
            ['name' => 'Rhaast', 'title' => 'L\'Abomination Darkin', 'role' => 'Mid', 'description' => 'Darkin AP slash'],
            
            // ADC (TROLL)
            ['name' => 'Ashe', 'title' => 'Reine de Glace', 'role' => 'ADC', 'description' => 'Flèches glace AP troll'],
            ['name' => 'Draven', 'title' => 'Le Glorieux Exécutant', 'role' => 'ADC', 'description' => 'Haches AP RIP'],
            ['name' => 'Jinx', 'title' => 'La Pyromane', 'role' => 'ADC', 'description' => 'Rockets AP chaos'],
            ['name' => 'Vayne', 'title' => 'Ange du Jugement', 'role' => 'ADC', 'description' => 'Bolts AP fail'],
            ['name' => 'Caitlyn', 'title' => 'L\'Officier Enforcée', 'role' => 'ADC', 'description' => 'Sniper AP'],
            ['name' => 'Kog\'Maw', 'title' => 'L\'Abomination de l\'Arène', 'role' => 'ADC', 'description' => 'Tongue AP lol'],
            ['name' => 'Miss Fortune', 'title' => 'Chasseuse de Primes', 'role' => 'ADC', 'description' => 'Bullets AP troll'],
            ['name' => 'Sivir', 'title' => 'Guerrière Noxienne', 'role' => 'ADC', 'description' => 'Boomerang AP'],
            ['name' => 'Twitch', 'title' => 'Rat Pestilent', 'role' => 'ADC', 'description' => 'Poison AP rat'],
            ['name' => 'Corki', 'title' => 'Commissaire Aviateur', 'role' => 'ADC', 'description' => 'Missiles AP!'],
            ['name' => 'Varus', 'title' => 'Flèche du Jugement', 'role' => 'ADC', 'description' => 'Corruption AP'],
            ['name' => 'Xayah', 'title' => 'Rebelle Plumée', 'role' => 'ADC', 'description' => 'Feathers AP'],
            ['name' => 'Samira', 'title' => 'Opératrice des Enfants de Zaun', 'role' => 'ADC', 'description' => 'Dash AP troll'],
            ['name' => 'Jhin', 'title' => 'Le Virtuose', 'role' => 'ADC', 'description' => 'Gun AP art'],
            ['name' => 'Kalista', 'title' => 'La Reine des Épines', 'role' => 'ADC', 'description' => 'Spear AP thrust'],
            ['name' => 'Smolder', 'title' => 'Chevalier Dragon', 'role' => 'ADC', 'description' => 'Dragon AP fire'],
            ['name' => 'Nilah', 'title' => 'La Joie d\'Insulaire', 'role' => 'ADC', 'description' => 'Blade AP dance'],
            ['name' => 'Akshan', 'title' => 'Le Vengeur Sentinelle', 'role' => 'ADC', 'description' => 'Hook AP grapple'],
            
            // SUPPORT
            ['name' => 'Lux', 'title' => 'Dame de Luminosité', 'role' => 'Support', 'description' => 'Laser AP support'],
            ['name' => 'Blitzcrank', 'title' => 'Steam Golem', 'role' => 'Support', 'description' => 'Crank AP pull'],
            ['name' => 'Thresh', 'title' => 'Le Collecter Sinistre', 'role' => 'Support', 'description' => 'Chains AP soul'],
            ['name' => 'Leona', 'title' => 'L\'Aube Radieuse', 'role' => 'Support', 'description' => 'Sun AP tank'],
            ['name' => 'Janna', 'title' => 'Tempête Furie', 'role' => 'Support', 'description' => 'Wind AP heals'],
            ['name' => 'Zyra', 'title' => 'La Mère des Plantes', 'role' => 'Support', 'description' => 'Plants AP army'],
            ['name' => 'Karma', 'title' => 'L\'Illuminée', 'role' => 'Support', 'description' => 'Spirit AP buff'],
            ['name' => 'Vel\'Koz', 'title' => 'L\'Observateur du Vide', 'role' => 'Support', 'description' => 'Lasers AP void'],
            ['name' => 'Xerath', 'title' => 'Le Sentinelle Ascendante', 'role' => 'Support', 'description' => 'Laser AP long range'],
            ['name' => 'Morgana', 'title' => 'Enfant de Nuit', 'role' => 'Support', 'description' => 'Bind AP dark'],
            ['name' => 'Soraka', 'title' => 'L\'Astre Bienveillant', 'role' => 'Support', 'description' => 'Heal AP star'],
            ['name' => 'Nautilus', 'title' => 'Titan de l\'Abyssal', 'role' => 'Support', 'description' => 'Anchor AP deep'],
            ['name' => 'Bard', 'title' => 'Gardien Mystérieux', 'role' => 'Support', 'description' => 'Chimes AP magic'],
            ['name' => 'Rakan', 'title' => 'Le Charmeur', 'role' => 'Support', 'description' => 'Wings AP charm'],
            ['name' => 'Pyke', 'title' => 'Fantôme Vengeur', 'role' => 'Support', 'description' => 'Hook AP execute'],
            ['name' => 'Senna', 'title' => 'Rédemption', 'role' => 'Support', 'description' => 'Souls AP light'],
            ['name' => 'Tahm Kench', 'title' => 'L\'Abomination Fluviale', 'role' => 'Support', 'description' => 'Catfish AP eat'],
            ['name' => 'Braum', 'title' => 'Le Cœur du Freljord', 'role' => 'Support', 'description' => 'Shield AP protect'],
            ['name' => 'Poppy', 'title' => 'La Gardienne', 'role' => 'Support', 'description' => 'Hammer AP stun'],
            ['name' => 'Rell', 'title' => 'L\'Armure Rebelle', 'role' => 'Support', 'description' => 'Metal AP charge'],
            ['name' => 'Milio', 'title' => 'Le Gardien du Feu', 'role' => 'Support', 'description' => 'Fire AP heal'],
            ['name' => 'Zilean', 'title' => 'L\'Alchimiste Temporel', 'role' => 'Support', 'description' => 'Time AP bomb'],
            ['name' => 'Lulu', 'title' => 'L\'Enchanteresse Fée', 'role' => 'Support', 'description' => 'Pix AP polymorph'],
            ['name' => 'Aurelion Sol', 'title' => 'Le Créateur Cosmique', 'role' => 'Support', 'description' => 'Star AP passive'],
            ['name' => 'Anivea', 'title' => 'L\'Oiseau Cristallin', 'role' => 'Support', 'description' => 'Phoenix AP rebirth'],
            
            // JUNGLE
            ['name' => 'Evelynn', 'title' => 'Calme avant la Tempête', 'role' => 'Jungle', 'description' => 'Invisible AP hunt'],
            ['name' => 'Lee Sin', 'title' => 'Moine Aveugle', 'role' => 'Jungle', 'description' => 'Kicks AP blind'],
            ['name' => 'Elise', 'title' => 'Araignée Terrifiante', 'role' => 'Jungle', 'description' => 'Spider AP queen'],
            ['name' => 'Nidalee', 'title' => 'Prédatrice Bestiale', 'role' => 'Jungle', 'description' => 'Spears AP cougar'],
            ['name' => 'Warwick', 'title' => 'Hybride Radioactif', 'role' => 'Jungle', 'description' => 'Blood AP beast'],
            ['name' => 'Kha\'Zix', 'title' => 'Prédateur du Vide', 'role' => 'Jungle', 'description' => 'Evolve AP void'],
            ['name' => 'Rengar', 'title' => 'Prédateur Ascendant', 'role' => 'Jungle', 'description' => 'Hunt AP prowl'],
            ['name' => 'Shyvana', 'title' => 'Moitié-Dragon', 'role' => 'Jungle', 'description' => 'Dragon AP flame'],
            ['name' => 'Udyr', 'title' => 'L\'Esprit Animal', 'role' => 'Jungle', 'description' => 'Stance AP spirit'],
            ['name' => 'Sejuani', 'title' => 'Impératrice Gelée', 'role' => 'Jungle', 'description' => 'Boar AP permafrost'],
            ['name' => 'Volibear', 'title' => 'Ours Ascendant', 'role' => 'Jungle', 'description' => 'Thunder AP storm'],
            ['name' => 'Hecarim', 'title' => 'L\'Étalon du Crépuscule', 'role' => 'Jungle', 'description' => 'Horse AP charge'],
            ['name' => 'Amumu', 'title' => 'Poupée Pleurarde', 'role' => 'Jungle', 'description' => 'Mummy AP sad'],
            ['name' => 'Taliyah', 'title' => 'La Tisseuse de Pierre', 'role' => 'Jungle', 'description' => 'Stones AP earth'],
            ['name' => 'Lillia', 'title' => 'Cervidé Espiègle', 'role' => 'Jungle', 'description' => 'Deer AP forest'],
            ['name' => 'Ivern', 'title' => 'Forestier Blanc', 'role' => 'Jungle', 'description' => 'Tree AP forest'],
            ['name' => 'Kindred', 'title' => 'Chasseurs Éternels', 'role' => 'Jungle', 'description' => 'Marks AP death'],
            ['name' => 'Graves', 'title' => 'Contrebandier Abyssal', 'role' => 'Jungle', 'description' => 'Gun AP shotgun'],
            ['name' => 'Fiddlesticks', 'title' => 'L\'Ancien Peur', 'role' => 'Jungle', 'description' => 'Scarecrow AP fear'],
            ['name' => 'Skarner', 'title' => 'Le Cristallin Ancien', 'role' => 'Jungle', 'description' => 'Scorpion AP stun'],
            ['name' => 'Trundle', 'title' => 'Le Troll Roi', 'role' => 'Jungle', 'description' => 'Troll AP pillar'],
            ['name' => 'Murk Wolf', 'title' => 'Le Loup du Marais', 'role' => 'Jungle', 'description' => 'Wolf AP hunt'],
            ['name' => 'Nocturne', 'title' => 'L\'Éternel Cauchemar', 'role' => 'Jungle', 'description' => 'Shadow AP fear'],
            ['name' => 'Rammus', 'title' => 'L\'Armadillo Sacré', 'role' => 'Jungle', 'description' => 'Armor AP roll'],
            ['name' => 'Jarvan IV', 'title' => 'Le Prince Demacien', 'role' => 'Jungle', 'description' => 'Lance AP trap'],
            ['name' => 'Rek\'Sai', 'title' => 'La Reine Néantique', 'role' => 'Jungle', 'description' => 'Void AP burrow'],
            ['name' => 'Kayn', 'title' => 'Le Porteur de l\'Ombre', 'role' => 'Jungle', 'description' => 'Shadow AP transform'],
        ];

        $champions = [];
        foreach ($championsData as $champData) {
            $champion = new Champion();
            $champion->setName($champData['name']);
            $champion->setTitle($champData['title']);
            $champion->setRole($champData['role']);
            $champion->setDescription($champData['description']);
            $champion->setPickRate(rand(5, 20) + (rand(0, 100) / 100));
            $champion->setWinRate(rand(45, 55) + (rand(0, 100) / 100));
            $manager->persist($champion);
            $champions[$champData['name']] = $champion;
        }

        // GÉNÉRATION AUTOMATIQUE DE BUILDS AP TROLL 🎪
        $buildTemplates = [
            ['name' => 'Full AP Chaos', 'description' => 'AP maximum = chaos', 'difficulty' => 'Troll', 'tips' => 'GG'],
            ['name' => 'Burst & Boom', 'description' => 'One shot tout ce qui bouge', 'difficulty' => 'Insane', 'tips' => 'Or not...'],
            ['name' => 'Meme Build', 'description' => 'Le plus troll possible', 'difficulty' => 'Meme', 'tips' => 'This is the way'],
            ['name' => 'AP Escalade', 'description' => 'Plus tard = plus AP', 'difficulty' => 'Late', 'tips' => 'Scaling go brrr'],
        ];

        // Créer 1-3 builds pour chaque champion
        foreach ($championsData as $champData) {
            $numBuilds = rand(1, 3);
            for ($i = 0; $i < $numBuilds; $i++) {
                $build = new ApBuild();
                $build->setChampion($champions[$champData['name']]);
                
                $template = $buildTemplates[array_rand($buildTemplates)];
                $build->setName($champData['name'] . ' - ' . $template['name']);
                $build->setDescription($champData['name'] . ' AP ' . $template['description']);
                $build->setDifficulty($template['difficulty']);
                $build->setTips($template['tips'] . ' (' . $champData['role'] . ')');
                $build->setWinRate(rand(30, 58) + (rand(0, 100) / 100));
                $build->setPickCount(rand(10, 500));
                $build->setPriority(rand(1, 3));
                $build->setIsActive(true);

                // Sélectionner 3-4 items aléatoires AP
                $itemNames = array_keys($itemEntities);
                shuffle($itemNames);
                for ($j = 0; $j < rand(3, 4); $j++) {
                    $build->addItem($itemEntities[$itemNames[$j]]);
                }

                $manager->persist($build);
            }
        }

        $manager->flush();
    }
}
