import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVendorDto {
    @IsNotEmpty()
    @IsString()
    make: string;

    @IsNotEmpty()
    @IsString()
    model: string;

    @IsNotEmpty()
    @IsString()
    year: string;

    @IsNotEmpty()
    @IsString()
    manufacturer: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

}