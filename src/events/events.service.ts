import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateEventDto } from "./dtos/create-event.dto"
import { UpdateEventDto } from "./dtos/update-event.dto"
import { PrismaService } from "prisma/prisma.service"
import { Event } from "@prisma/client"

@Injectable()
export class EventsService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(dto: CreateEventDto): Promise<Event> {
		const createdEvent = await this.prismaService.event.create({
			data: dto
		})

		return createdEvent
	}

	async getAll(): Promise<Event[]> {
		return await this.prismaService.event.findMany()
	}

	async update(id: number, dto: UpdateEventDto) {
		await this.getOneOrThrow(id)

		const deletedTask = await this.prismaService.event.update({
			where: { id },
			data: dto
		})

		return deletedTask
	}

	async remove(id: number) {
		await this.getOneOrThrow(id)

		const deletedEvent = await this.prismaService.event.delete({
			where: { id }
		})

		return deletedEvent
	}

	private async getOneOrThrow(id: number): Promise<Event> {
		const event = await this.prismaService.event.findUnique({ where: { id } })

		if (!event) {
			throw new NotFoundException("Could not find any events")
		}

		return event
	}
}
