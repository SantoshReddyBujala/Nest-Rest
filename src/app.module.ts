import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [UsersModule, VendorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
