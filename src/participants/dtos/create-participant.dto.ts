import { $Enums } from "@prisma/client"

export class CreateParticipantDto {
	fullName: string

	email: string

	dateOfBirth: string

	source: $Enums.SourceEnum

	eventId: number
}
