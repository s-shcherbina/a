import { $Enums } from '@prisma/client'
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateParticipantDto {
	@IsDefined()
	@IsNotEmpty()
	@IsString()
	fullName: string

	@IsDefined()
	@IsNotEmpty()
	email: string

	@IsDefined()
	@IsNotEmpty()
	@IsString()
	dateOfBirth: string

	@IsDefined()
	@IsNotEmpty()
	source: $Enums.SourceEnum

	eventId: number
}
