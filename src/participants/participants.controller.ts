import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
	ParseIntPipe,
} from '@nestjs/common'
import { ParticipantsServices } from './participants.service'
import { CreateParticipantDto } from './dtos/create-participant.dto'
import { UpdateParticipantDto } from './dtos/update-participant.dto'

@Controller('participants')
export class ParticipantsController {
	constructor(private readonly participantsService: ParticipantsServices) {}

	@Post()
	create(@Body() createParticipantDto: CreateParticipantDto) {
		return this.participantsService.create(createParticipantDto)
	}

	@Get()
	get(@Query('eventId', ParseIntPipe) eventId: number) {
		return this.participantsService.get(eventId)
	}

	@Patch(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateParticipantDto: UpdateParticipantDto,
	) {
		return this.participantsService.update(+id, updateParticipantDto)
	}

	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.participantsService.remove(+id)
	}
}
