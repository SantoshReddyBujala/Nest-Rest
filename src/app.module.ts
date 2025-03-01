import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UesrsService } from './uesrs/uesrs.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, UesrsService],
})
export class AppModule { }
