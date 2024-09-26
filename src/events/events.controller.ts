import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ParseIntPipe,
} from '@nestjs/common'
import { EventsService } from './events.service'
import { CreateEventDto } from './dtos/create-event.dto'
import { UpdateEventDto } from './dtos/update-event.dto'

@Controller('events')
export class EventsController {
	constructor(private readonly eventsService: EventsService) {}

	@Post()
	create(@Body() createEventDto: CreateEventDto) {
		return this.eventsService.create(createEventDto)
	}

	@Get()
	getAll() {
		return this.eventsService.getAll()
	}

	@Patch(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateEventDto: UpdateEventDto,
	) {
		return this.eventsService.update(+id, updateEventDto)
	}

	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.eventsService.remove(id)
	}
	// remove(@Param("id", ParseIntPipe) id: number) {
}
