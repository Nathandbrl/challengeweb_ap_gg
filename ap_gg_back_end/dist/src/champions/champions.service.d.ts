import { PrismaService } from '../prisma/prisma.service';
export declare class ChampionsService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__championsClient<{
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
