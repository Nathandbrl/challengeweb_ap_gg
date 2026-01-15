import { Injectable } from '@angular/core';

export interface Rune {
  name: string;
  icon: string;
  tree: 'precision' | 'domination' | 'sorcery' | 'resolve' | 'inspiration';
}

export interface BuildDetail {
  championName: string;
  role: string;
  buildName: string;
  description: string;
  difficulty: string;
  tips: string[];
  items: string[];
  spellMaxOrder: string[]; // ['Q', 'W', 'E', 'Q', 'R', ...]
  runes: {
    primary: Rune[];
    secondary: Rune[];
  };
  summonerSpells: string[];
  laning: string;
  teamfight: string;
  itemBuild: {
    starter: string[];
    core: string[];
    situational: string[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class BuildDetailService {

  getRuneIcon(runeName: string): string {
    // Mapping des runes pour les icônes Material
    const runeMap: { [key: string]: string } = {
      'Conquerant': '⚔️',
      'Électrocute': '⚡',
      'Moisson': '🌾',
      'Vengeance': '🛡️',
      'Inspiration': '💡',
    };
    return runeMap[runeName] || '🔷';
  }

  generateBuildDetail(championName: string, role: string): BuildDetail {
    // Génération dynamique des détails de build
    const maxOrderVariations = [
      ['Q', 'W', 'E', 'Q', 'R', 'Q', 'W', 'Q', 'W', 'R', 'W', 'W', 'E', 'E', 'R', 'E', 'E', 'E'],
      ['W', 'Q', 'E', 'W', 'R', 'W', 'Q', 'W', 'Q', 'R', 'Q', 'Q', 'E', 'E', 'R', 'E', 'E', 'E'],
      ['E', 'Q', 'W', 'E', 'R', 'E', 'Q', 'E', 'Q', 'R', 'Q', 'Q', 'W', 'W', 'R', 'W', 'W', 'W'],
    ];

    const runeTemplates = [
      {
        primary: [
          { name: 'Conquerant', icon: '⚔️', tree: 'precision' as const },
          { name: 'Triomphe', icon: '👑', tree: 'precision' as const },
          { name: 'Légendaire', icon: '📈', tree: 'precision' as const },
          { name: 'Dernière Résistance', icon: '❤️', tree: 'precision' as const }
        ],
        secondary: [
          { name: 'Rajeunissement', icon: '🔄', tree: 'resolve' as const },
          { name: 'Revitalisation', icon: '✨', tree: 'resolve' as const }
        ]
      },
      {
        primary: [
          { name: 'Électrocute', icon: '⚡', tree: 'domination' as const },
          { name: 'Coup Bas', icon: '🎯', tree: 'domination' as const },
          { name: 'Arracheur', icon: '💀', tree: 'domination' as const },
          { name: 'Chasse Suprême', icon: '🏹', tree: 'domination' as const }
        ],
        secondary: [
          { name: 'Transcendance', icon: '📊', tree: 'sorcery' as const },
          { name: 'Brûlure', icon: '🔥', tree: 'sorcery' as const }
        ]
      },
      {
        primary: [
          { name: 'Moisson', icon: '🌾', tree: 'sorcery' as const },
          { name: 'Coup de Grâce', icon: '⚰️', tree: 'sorcery' as const },
          { name: 'Transcendance', icon: '📊', tree: 'sorcery' as const },
          { name: 'Brûlure', icon: '🔥', tree: 'sorcery' as const }
        ],
        secondary: [
          { name: 'Inspiration', icon: '💡', tree: 'inspiration' as const },
          { name: 'Désactivation', icon: '⏸️', tree: 'inspiration' as const }
        ]
      }
    ];

    const buildIndex = Math.abs(championName.charCodeAt(0) % runeTemplates.length);
    const selectedRunes = runeTemplates[buildIndex];
    const selectedMaxOrder = maxOrderVariations[buildIndex];

    const tips = [
      `${championName} en AP c'est troll mais ça peut marcher`,
      `Max les dégâts magiques en priorité`,
      `Pas de défense = plus de chaos`,
      `Les erreurs des ennemis sont tes points d'XP`,
      `GG si tu meurs`,
    ];

    const itemBuild = {
      starter: ['Tome de Radiance', 'Anneau de Protection'],
      core: ['Capuchon de Rabadon', 'Coiffe Mortelle', 'Tourment de Liandry'],
      situational: ['Sablier de Zhonya', 'Voile de la Banshee', 'Bâton de Vide']
    };

    return {
      championName,
      role,
      buildName: `${championName} Full AP Troll`,
      description: `Build AP complètement troll pour ${championName}, la vraie menace (ou la vraie blague?)`,
      difficulty: 'Impossible',
      tips,
      items: [...itemBuild.core],
      spellMaxOrder: selectedMaxOrder,
      runes: selectedRunes,
      summonerSpells: role === 'ADC' ? ['Éclat', 'Châtiment'] : ['Éclat', 'Téléport'],
      laning: 'Poke constant avec les spells pour accumuler les dégâts magiques',
      teamfight: 'Rester en arrière et lancer tous tes spells magiques sans mercy',
      itemBuild
    };
  }
}
