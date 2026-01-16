import { Controller, Get, Param } from '@nestjs/common';
import { BuildsService } from './builds.service';

@Controller('api/builds')
export class BuildsController {
    constructor(private readonly buildsService: BuildsService) { }

    @Get()
    findAll() {
        return this.buildsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.buildsService.findOne(+id);
    }

    @Get('champion/:name')
    findByChampion(@Param('name') name: string) {
        return this.buildsService.findByChampion(name);
    }
}
