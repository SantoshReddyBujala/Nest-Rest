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
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id') //Patch /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.userService.delete(+id);
    }

}
