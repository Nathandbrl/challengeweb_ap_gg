import { BuildsService } from './builds.service';
export declare class BuildsController {
    private readonly buildsService;
    constructor(buildsService: BuildsService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        ap_build_items: ({
            items: {
                id: number;
                name: string;
                description: string | null;
                image_url: string | null;
                riot_id: string | null;
                created_at: Date;
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
        name: string;
        description: string | null;
        win_rate: number | null;
        created_at: Date;
        updated_at: Date;
        champion_id: number;
        pick_count: number | null;
        difficulty: string | null;
        tips: string | null;
        priority: number;
        is_active: boolean;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ap_buildsClient<({
        ap_build_items: ({
            items: {
                id: number;
                name: string;
                description: string | null;
                image_url: string | null;
                riot_id: string | null;
                created_at: Date;
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
        name: string;
        description: string | null;
        win_rate: number | null;
        created_at: Date;
        updated_at: Date;
        champion_id: number;
        pick_count: number | null;
        difficulty: string | null;
        tips: string | null;
        priority: number;
        is_active: boolean;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findByChampion(name: string): import(".prisma/client").Prisma.PrismaPromise<({
        ap_build_items: ({
            items: {
                id: number;
                name: string;
                description: string | null;
                image_url: string | null;
                riot_id: string | null;
                created_at: Date;
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
        name: string;
        description: string | null;
        win_rate: number | null;
        created_at: Date;
        updated_at: Date;
        champion_id: number;
        pick_count: number | null;
        difficulty: string | null;
        tips: string | null;
        priority: number;
        is_active: boolean;
    })[]>;
}
