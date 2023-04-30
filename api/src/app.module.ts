import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { UserModule } from './user/user.module';
// import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".env.local",
      }
      )],
      useFactory: (configService: ConfigService) => ({        
        type: 'postgres',
        host: configService.get('host'),
        port: +configService.get('port'),
        username: 'postgres', // accessing using .env.local doesn't work
        password: configService.get('password'),
        database: configService.get('database'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: true
      }),
      inject: [ConfigService],
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
