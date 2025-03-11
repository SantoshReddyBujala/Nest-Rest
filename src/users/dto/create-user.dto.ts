import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Enter a valid Name', example: 'Raghu' })
    name: string;

    @IsEmail()
    @ApiProperty({ description: 'Enter a valid email id', example: 'test@test.co' })
    email: string;

    @IsEnum(['ADMIN', 'INTERN', 'ENGINEER'], { message: 'Valid role required' })
    @ApiProperty({ description: 'Role as a parameter', example: 'ADMIN', required: false })
    role: 'ADMIN' | 'INTERN' | 'ENGINEER';
}