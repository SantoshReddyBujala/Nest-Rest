import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { VendorService } from './vendor.service';

@Controller('vendors')
export class VendorController {

    constructor(private vendorService: VendorService) { }

    @Get()
    findAll(@Query('model') model?: 'XLE' | 'LIMITED') {
        return this.vendorService.findAll(model);
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.vendorService.fineOne(id)
    }

    @Post() // POST /users
    create(@Body(ValidationPipe) createVendorDto: CreateVendorDto) {
        return this.vendorService.create(createVendorDto);
    }

    @Patch(':id') //Patch /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateVendorDto) {
        return this.vendorService.update(id, updateUserDto);
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.vendorService.delete(id);
    }
}
