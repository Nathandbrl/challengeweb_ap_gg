import { BuildsService } from './builds.service';
export declare class BuildsController {
    private readonly buildsService;
    constructor(buildsService: BuildsService);
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
    findOne(id: string): Promise<{
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
    findByChampion(name: string): Promise<{
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
