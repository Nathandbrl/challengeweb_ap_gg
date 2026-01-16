import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('api/players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) { }

    @Get('search')
    search(@Query('q') query: string) {
        return this.playersService.search(query);
    }

    @Get(':riotId')
    findOne(@Param('riotId') riotId: string) {
        return this.playersService.findOne(riotId);
    }
}
