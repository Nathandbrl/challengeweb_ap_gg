import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BuildsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        const builds = await this.prisma.ap_builds.findMany({
            include: { champions: true, ap_build_items: { include: { items: true } } },
        });
        return builds.map(build => ({
            ...build,
            champion: {
                id: build.champions.id,
                name: build.champions.name
            },
            items: build.ap_build_items.map(bi => ({
                id: bi.items.id,
                name: bi.items.name,
                riotId: bi.items.riot_id,
                gold: bi.items.gold,
                apBonus: bi.items.ap_bonus
            }))
        }));
    }

    async findOne(id: number) {
        const build = await this.prisma.ap_builds.findUnique({
            where: { id },
            include: { champions: true, ap_build_items: { include: { items: true } } },
        });
        if (!build) return null;
        return {
            ...build,
            champion: {
                id: build.champions.id,
                name: build.champions.name
            },
            items: build.ap_build_items.map(bi => ({
                id: bi.items.id,
                name: bi.items.name,
                riotId: bi.items.riot_id,
                gold: bi.items.gold,
                apBonus: bi.items.ap_bonus
            }))
        };
    }

    async findByChampion(championName: string) {
        const builds = await this.prisma.ap_builds.findMany({
            where: { champions: { name: { equals: championName, mode: 'insensitive' } } },
            include: { champions: true, ap_build_items: { include: { items: true } } },
        });
        return builds.map(build => ({
            ...build,
            champion: {
                id: build.champions.id,
                name: build.champions.name
            },
            items: build.ap_build_items.map(bi => ({
                id: bi.items.id,
                name: bi.items.name,
                riotId: bi.items.riot_id,
                gold: bi.items.gold,
                apBonus: bi.items.ap_bonus
            }))
        }));
    }
}
