import { Injectable, NotFoundException } from "@nestjs/common"
import { PrismaService } from "prisma/prisma.service"
import { CreateParticipantDto } from "./dtos/create-participant.dto"
import { Participant } from "@prisma/client"
import { UpdateParticipantDto } from "./dtos/update-participant.dto"

@Injectable()
export class ParticipantsServices {
	constructor(private readonly prismaService: PrismaService) {}

	async create(dto: CreateParticipantDto) {
		const createdParticipant = await this.prismaService.participant.create({
			data: dto
		})

		return createdParticipant
	}

	async get(eventId: number): Promise<Participant[]> {
		return await this.prismaService.participant.findMany({ where: { eventId } })
	}

	async update(id: number, dto: UpdateParticipantDto) {
		await this.getOneOrThrow(id)

		const updatedParticipant = await this.prismaService.participant.update({
			where: { id },
			data: dto
		})
		return updatedParticipant
	}

	async remove(id: number) {
		await this.getOneOrThrow(id)

		const updatedParticipant = await this.prismaService.participant.delete({
			where: { id }
		})

		return updatedParticipant
	}

	private async getOneOrThrow(id: number): Promise<Participant> {
		const participant = await this.prismaService.participant.findUnique({
			where: { id }
		})

		if (!participant) {
			throw new NotFoundException("Could not find any particpant")
		}

		return participant
	}
}
