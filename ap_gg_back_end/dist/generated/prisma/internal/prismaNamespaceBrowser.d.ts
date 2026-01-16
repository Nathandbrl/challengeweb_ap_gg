import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly ap_build_items: "ap_build_items";
    readonly ap_builds: "ap_builds";
    readonly champions: "champions";
    readonly doctrine_migration_versions: "doctrine_migration_versions";
    readonly favorite_champions: "favorite_champions";
    readonly items: "items";
    readonly player_statistics: "player_statistics";
    readonly players: "players";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Ap_build_itemsScalarFieldEnum: {
    readonly ap_build_id: "ap_build_id";
    readonly item_id: "item_id";
};
export type Ap_build_itemsScalarFieldEnum = (typeof Ap_build_itemsScalarFieldEnum)[keyof typeof Ap_build_itemsScalarFieldEnum];
export declare const Ap_buildsScalarFieldEnum: {
    readonly id: "id";
    readonly champion_id: "champion_id";
    readonly name: "name";
    readonly description: "description";
    readonly win_rate: "win_rate";
    readonly pick_count: "pick_count";
    readonly difficulty: "difficulty";
    readonly tips: "tips";
    readonly priority: "priority";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Ap_buildsScalarFieldEnum = (typeof Ap_buildsScalarFieldEnum)[keyof typeof Ap_buildsScalarFieldEnum];
export declare const ChampionsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly title: "title";
    readonly description: "description";
    readonly role: "role";
    readonly image_url: "image_url";
    readonly pick_rate: "pick_rate";
    readonly win_rate: "win_rate";
    readonly riot_id: "riot_id";
    readonly created_at: "created_at";
};
export type ChampionsScalarFieldEnum = (typeof ChampionsScalarFieldEnum)[keyof typeof ChampionsScalarFieldEnum];
export declare const Doctrine_migration_versionsScalarFieldEnum: {
    readonly version: "version";
    readonly executed_at: "executed_at";
    readonly execution_time: "execution_time";
};
export type Doctrine_migration_versionsScalarFieldEnum = (typeof Doctrine_migration_versionsScalarFieldEnum)[keyof typeof Doctrine_migration_versionsScalarFieldEnum];
export declare const Favorite_championsScalarFieldEnum: {
    readonly id: "id";
    readonly player_id: "player_id";
    readonly champion_id: "champion_id";
    readonly added_at: "added_at";
};
export type Favorite_championsScalarFieldEnum = (typeof Favorite_championsScalarFieldEnum)[keyof typeof Favorite_championsScalarFieldEnum];
export declare const ItemsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly gold: "gold";
    readonly ap_bonus: "ap_bonus";
    readonly other_bonus: "other_bonus";
    readonly image_url: "image_url";
    readonly riot_id: "riot_id";
    readonly created_at: "created_at";
};
export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum];
export declare const Player_statisticsScalarFieldEnum: {
    readonly id: "id";
    readonly player_id: "player_id";
    readonly champion_id: "champion_id";
    readonly games_played: "games_played";
    readonly wins: "wins";
    readonly win_rate: "win_rate";
    readonly avg_kills: "avg_kills";
    readonly avg_deaths: "avg_deaths";
    readonly avg_assists: "avg_assists";
    readonly avg_cs_per_min: "avg_cs_per_min";
    readonly avg_gold_per_min: "avg_gold_per_min";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Player_statisticsScalarFieldEnum = (typeof Player_statisticsScalarFieldEnum)[keyof typeof Player_statisticsScalarFieldEnum];
export declare const PlayersScalarFieldEnum: {
    readonly id: "id";
    readonly riot_id: "riot_id";
    readonly summoner_name: "summoner_name";
    readonly tag_line: "tag_line";
    readonly profile_icon_url: "profile_icon_url";
    readonly summoner_level: "summoner_level";
    readonly rank: "rank";
    readonly tier: "tier";
    readonly league_points: "league_points";
    readonly wins: "wins";
    readonly losses: "losses";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
