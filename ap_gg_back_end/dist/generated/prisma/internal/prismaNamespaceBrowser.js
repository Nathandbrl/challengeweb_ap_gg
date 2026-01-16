"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.PlayersScalarFieldEnum = exports.Player_statisticsScalarFieldEnum = exports.ItemsScalarFieldEnum = exports.Favorite_championsScalarFieldEnum = exports.Doctrine_migration_versionsScalarFieldEnum = exports.ChampionsScalarFieldEnum = exports.Ap_buildsScalarFieldEnum = exports.Ap_build_itemsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    ap_build_items: 'ap_build_items',
    ap_builds: 'ap_builds',
    champions: 'champions',
    doctrine_migration_versions: 'doctrine_migration_versions',
    favorite_champions: 'favorite_champions',
    items: 'items',
    player_statistics: 'player_statistics',
    players: 'players'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Ap_build_itemsScalarFieldEnum = {
    ap_build_id: 'ap_build_id',
    item_id: 'item_id'
};
exports.Ap_buildsScalarFieldEnum = {
    id: 'id',
    champion_id: 'champion_id',
    name: 'name',
    description: 'description',
    win_rate: 'win_rate',
    pick_count: 'pick_count',
    difficulty: 'difficulty',
    tips: 'tips',
    priority: 'priority',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ChampionsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    title: 'title',
    description: 'description',
    role: 'role',
    image_url: 'image_url',
    pick_rate: 'pick_rate',
    win_rate: 'win_rate',
    riot_id: 'riot_id',
    created_at: 'created_at'
};
exports.Doctrine_migration_versionsScalarFieldEnum = {
    version: 'version',
    executed_at: 'executed_at',
    execution_time: 'execution_time'
};
exports.Favorite_championsScalarFieldEnum = {
    id: 'id',
    player_id: 'player_id',
    champion_id: 'champion_id',
    added_at: 'added_at'
};
exports.ItemsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    gold: 'gold',
    ap_bonus: 'ap_bonus',
    other_bonus: 'other_bonus',
    image_url: 'image_url',
    riot_id: 'riot_id',
    created_at: 'created_at'
};
exports.Player_statisticsScalarFieldEnum = {
    id: 'id',
    player_id: 'player_id',
    champion_id: 'champion_id',
    games_played: 'games_played',
    wins: 'wins',
    win_rate: 'win_rate',
    avg_kills: 'avg_kills',
    avg_deaths: 'avg_deaths',
    avg_assists: 'avg_assists',
    avg_cs_per_min: 'avg_cs_per_min',
    avg_gold_per_min: 'avg_gold_per_min',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PlayersScalarFieldEnum = {
    id: 'id',
    riot_id: 'riot_id',
    summoner_name: 'summoner_name',
    tag_line: 'tag_line',
    profile_icon_url: 'profile_icon_url',
    summoner_level: 'summoner_level',
    rank: 'rank',
    tier: 'tier',
    league_points: 'league_points',
    wins: 'wins',
    losses: 'losses',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map