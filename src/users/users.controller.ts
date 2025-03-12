import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, CreateUserResponseDto, GetUserResponseDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBadRequestResponse, ApiBasicAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User controller')
@ApiBasicAuth()
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    @Get() //GET /users or users?role=value&age=value
    @ApiQuery({ name: 'role', required: false, type: String, description: 'ADMIN' })
    @ApiOkResponse({ type: [GetUserResponseDto] })
    findAll(@Query('role') role?: 'ADMIN' | 'INTERN') {
        return this.userService.findAll(role);
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.fineOne(id)
    }

    @ApiOperation({ summary: 'Used to create Users' })
    @ApiResponse({ status: 201, description: 'User created', type: CreateUserResponseDto })
    @ApiBadRequestResponse({ description: 'Bad request data' })
    @Post() // POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Patch(':id') //Patch /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id);
    }

}
