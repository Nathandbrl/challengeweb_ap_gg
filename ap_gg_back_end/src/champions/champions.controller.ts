import { Controller, Get, Param } from '@nestjs/common';
import { ChampionsService } from './champions.service';

@Controller('api/champions')
export class ChampionsController {
    constructor(private readonly championsService: ChampionsService) { }

    @Get()
    findAll() {
        return this.championsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.championsService.findOne(+id);
    }

    @Get('role/:role')
    findByRole(@Param('role') role: string) {
        return this.championsService.findByRole(role);
    }
}
