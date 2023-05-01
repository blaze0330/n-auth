import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { MailerModule, MailerService } from '@nestjs-modules/mailer';
// import "reflect-metadata";

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey', 
          pass: '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'
        }
      }
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".env.local",
      },
      ),
    ],
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
    TypeOrmModule.forFeature([User]),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
