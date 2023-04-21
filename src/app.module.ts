import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://mongo:dmMaV1yXLfSR5xrxCf5Y@containers-us-west-85.railway.app:6760')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }