import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    @Get() //GET /users or users?role=value&age=value
    findAll(@Query('role') role?: 'ADMIN' | 'INTERN') {
        return this.userService.findAll(role);
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string) {
        return this.userService.fineOne(+id)
    }

    @Post() // POST /users
    create(@Body() user: {
        name: string,
        username: string,
        email: string, address: { street: string, suite: string, city: string, zipcode: string, geo: { lat: string, lng: string } }, phone: string, website: string, company: { name: string, catchPhrase: string, bs: string }
        role: 'ADMIN' | 'INTERN' | 'ENGINEER'
    }) {
        return this.userService.create(user);
    }

    @Patch(':id') //Patch /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {
        name?: string,
        username?: string,
        email?: string,
        role?: 'ADMIN' | 'INTERN' | 'ENGINEER'
    }) {
        return this.userService.update(+id, userUpdate);
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.userService.delete(+id);
    }

}
