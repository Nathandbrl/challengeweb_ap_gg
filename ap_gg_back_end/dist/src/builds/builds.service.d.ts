import { PrismaService } from '../prisma/prisma.service';
export declare class BuildsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        champion: {
            id: number;
            name: string;
        };
        items: {
            id: number;
            name: string;
            riotId: string | null;
            gold: number | null;
            apBonus: number | null;
        }[];
        ap_build_items: ({
            items: {
                id: number;
                name: string;
                description: string | null;
                created_at: Date;
                image_url: string | null;
                riot_id: string | null;
                gold: number | null;
                ap_bonus: number | null;
                other_bonus: number | null;
            };
        } & {
            ap_build_id: number;
            item_id: number;
        })[];
        champions: {
            id: number;
            name: string;
            description: string | null;
            win_rate: number | null;
            created_at: Date;
            title: string;
            role: string;
            image_url: string | null;
            pick_rate: number | null;
            riot_id: string | null;
        };
        id: number;
        champion_id: number;
        name: string;
        description: string | null;
        win_rate: number | null;
        pick_count: number | null;
        difficulty: string | null;
        tips: string | null;
        priority: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: number): Promise<{
        champion: {
            id: number;
            name: string;
        };
        items: {
            id: number;
            name: string;
            riotId: string | null;
            gold: number | null;
            apBonus: number | null;
        }[];
        ap_build_items: ({
            items: {
                id: number;
                name: string;
                description: string | null;
                created_at: Date;
                image_url: string | null;
                riot_id: string | null;
                gold: number | null;
                ap_bonus: number | null;
                other_bonus: number | null;
            };
        } & {
            ap_build_id: number;
            item_id: number;
        })[];
        champions: {
            id: number;
            name: string;
            description: string | null;
            win_rate: number | null;
            created_at: Date;
            title: string;
            role: string;
            image_url: string | null;
            pick_rate: number | null;
            riot_id: string | null;
        };
        id: number;
        champion_id: number;
        name: string;
        description: string | null;
        win_rate: number | null;
        pick_count: number | null;
        difficulty: string | null;
        tips: string | null;
        priority: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    } | null>;
    findByChampion(championName: string): Promise<{
        champion: {
            id: number;
            name: string;
        };
        items: {
            id: number;
            name: string;
            riotId: string | null;
            gold: number | null;
            apBonus: number | null;
        }[];
        ap_build_items: ({
            items: {
                id: number;
                name: string;
                description: string | null;
                created_at: Date;
                image_url: string | null;
                riot_id: string | null;
                gold: number | null;
                ap_bonus: number | null;
                other_bonus: number | null;
            };
        } & {
            ap_build_id: number;
            item_id: number;
        })[];
        champions: {
            id: number;
            name: string;
            description: string | null;
            win_rate: number | null;
            created_at: Date;
            title: string;
            role: string;
            image_url: string | null;
            pick_rate: number | null;
            riot_id: string | null;
        };
        id: number;
        champion_id: number;
        name: string;
        description: string | null;
        win_rate: number | null;
        pick_count: number | null;
        difficulty: string | null;
        tips: string | null;
        priority: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
}
