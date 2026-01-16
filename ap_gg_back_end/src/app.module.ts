import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ChampionsModule } from './champions/champions.module';
import { PlayersModule } from './players/players.module';
import { BuildsModule } from './builds/builds.module';

@Module({
  imports: [PrismaModule, ChampionsModule, PlayersModule, BuildsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
