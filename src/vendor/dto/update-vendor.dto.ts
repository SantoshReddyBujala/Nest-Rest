import { CreateVendorDto } from "./create-vendor.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateVendorDto extends PartialType(CreateVendorDto) { }