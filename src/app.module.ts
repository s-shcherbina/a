import { Module } from '@nestjs/common'
import { ParticipantsModule } from './participants/participants.module';
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from 'prisma/prisma.module'
import { EventsModule } from './events/events.module';

@Module({
  imports: 
    [ConfigModule.forRoot({ isGlobal: true }),
      PrismaModule,
      ParticipantsModule,
      EventsModule
    ],
})
export class AppModule {}
