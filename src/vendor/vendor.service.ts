import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorService {
    private vendors = [
        {
            "id": 1,
            "make": "Test",
            "model": "XLE",
            "year": "2005",
            "manufacturer": "TAYOTA",
            "price": 29000
        },
        {
            "id": 2,
            "make": "Testing",
            "model": "LIMITED",
            "year": "2004",
            "manufacturer": "HONDA",
            "price": 39000
        }
    ]

    findAll(model?: 'XLE' | 'LIMITED') {
        if (model) {
            const rolesArray = this.vendors.filter(vendor => vendor.model === model);
            if (rolesArray.length === 0) throw new NotFoundException('Vehicle model not found');
            return rolesArray;
        }
        return this.vendors;
    }

    fineOne(id: number) {
        const user = this.vendors.find(user => user.id === id);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    create(createUserDto: CreateVendorDto) {
        const userByHighId = [...this.vendors].sort((a, b) => b.id - a.id)
        const newUser = {
            id: userByHighId[0].id + 1,
            ...createUserDto
        }
        this.vendors.push();
        return newUser;
    }

    update(id: number, updateVendorDto: UpdateVendorDto) {
        this.vendors = this.vendors.map(vendor => {
            if (vendor.id === id) {
                return { ...vendor, ...updateVendorDto }
            }
            return vendor;
        })
        return this.fineOne(id)
    }

    delete(id: number) {
        const removedUser = this.fineOne(id);
        this.vendors = this.vendors.filter(user => user.id !== id);

        return removedUser;
    }
}
