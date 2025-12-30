import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin@1234',
      database: 'notes_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ dev only
    }),
    AuthModule,
    NotesModule,
    UsersModule,
  ]
})
export class AppModule {}
