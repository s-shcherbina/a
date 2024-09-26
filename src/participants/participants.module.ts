import { Module } from '@nestjs/common';
import { ParticipantsServices } from './participants.service';
import { ParticipantsController } from './participants.controller';

@Module({
  controllers: [ParticipantsController],
  providers: [ParticipantsServices],
})
export class ParticipantsModule {}
