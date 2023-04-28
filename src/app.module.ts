import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'manny.db.elephantsql.com',
      port: 5432,
      username: 'xcavvvtu',
      password: '2LdqN_Hp5WQ_7AVUo8pgKmQBh2bspJOG',
      database: 'xcavvvtu',
      entities: [UserEntity],
      synchronize: true,
    }),
    UsersModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
