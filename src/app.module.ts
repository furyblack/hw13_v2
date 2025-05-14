import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersRepository } from './users/users.repository';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cats/cats-schema';
import { CatsRepository } from './cats/cat.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      dbName: 'nest',
    }),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, UsersRepository, CatsRepository],
})
export class AppModule {}
