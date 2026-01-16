import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BuildsService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.ap_builds.findMany({
            include: { champions: true, ap_build_items: { include: { items: true } } },
        });
    }

    findOne(id: number) {
        return this.prisma.ap_builds.findUnique({
            where: { id },
            include: { champions: true, ap_build_items: { include: { items: true } } },
        });
    }

    findByChampion(championName: string) {
        return this.prisma.ap_builds.findMany({
            where: { champions: { name: { equals: championName, mode: 'insensitive' } } },
            include: { champions: true, ap_build_items: { include: { items: true } } },
        });
    }
}
