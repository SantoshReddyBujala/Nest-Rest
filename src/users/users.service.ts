import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "ADMIN"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER"
        }
    ]

    findAll(role?: 'ADMIN' | 'INTERN' | 'ENGINEER') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0) throw new NotFoundException('User role not found');
            return rolesArray;
        }
        return this.users;
    }

    fineOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    create(createUserDto: CreateUserDto) {
        const userByHighId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: userByHighId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto }
            }
            return user;
        })
        return this.fineOne(id)
    }

    delete(id: number) {
        const removedUser = this.fineOne(id);
        this.users = this.users.filter(user => user.id !== id);

        return removedUser;
    }
}
