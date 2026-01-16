import { PlayersService } from './players.service';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    search(query: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        riot_id: string;
        created_at: Date;
        summoner_name: string;
        tag_line: string | null;
        profile_icon_url: string | null;
        summoner_level: number;
        rank: string | null;
        tier: string | null;
        league_points: number | null;
        wins: number | null;
        losses: number | null;
        updated_at: Date;
    }[]>;
    findOne(riotId: string): import(".prisma/client").Prisma.Prisma__playersClient<({
        favorite_champions: ({
            champions: {
                id: number;
                name: string;
                title: string;
                description: string | null;
                role: string;
                image_url: string | null;
                pick_rate: number | null;
                win_rate: number | null;
                riot_id: string | null;
                created_at: Date;
            };
        } & {
            id: number;
            champion_id: number;
            player_id: number;
            added_at: Date;
        })[];
        player_statistics: ({
            champions: {
                id: number;
                name: string;
                title: string;
                description: string | null;
                role: string;
                image_url: string | null;
                pick_rate: number | null;
                win_rate: number | null;
                riot_id: string | null;
                created_at: Date;
            };
        } & {
            id: number;
            win_rate: number | null;
            created_at: Date;
            wins: number | null;
            updated_at: Date;
            champion_id: number;
            player_id: number;
            games_played: number | null;
            avg_kills: number | null;
            avg_deaths: number | null;
            avg_assists: number | null;
            avg_cs_per_min: number | null;
            avg_gold_per_min: number | null;
        })[];
    } & {
        id: number;
        riot_id: string;
        created_at: Date;
        summoner_name: string;
        tag_line: string | null;
        profile_icon_url: string | null;
        summoner_level: number;
        rank: string | null;
        tier: string | null;
        league_points: number | null;
        wins: number | null;
        losses: number | null;
        updated_at: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
