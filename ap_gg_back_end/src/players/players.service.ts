import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlayersService {
    constructor(private prisma: PrismaService) { }

    search(query: string) {
        return this.prisma.players.findMany({
            where: {
                OR: [
                    { summoner_name: { contains: query, mode: 'insensitive' } },
                    { riot_id: { contains: query, mode: 'insensitive' } },
                ],
            },
        });
    }

    findOne(riotId: string) {
        return this.prisma.players.findUnique({
            where: { riot_id: riotId },
            include: {
                player_statistics: { include: { champions: true } },
                favorite_champions: { include: { champions: true } },
            }
        });
    }
}
