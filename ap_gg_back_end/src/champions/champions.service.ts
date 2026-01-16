import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChampionsService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.champions.findMany();
    }

    findOne(id: number) {
        return this.prisma.champions.findUnique({ where: { id } });
    }

    findByRole(role: string) {
        return this.prisma.champions.findMany({ where: { role } });
    }
}
