import { ChampionsService } from './champions.service';
export declare class ChampionsController {
    private readonly championsService;
    constructor(championsService: ChampionsService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__championsClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findByRole(role: string): import(".prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
}
