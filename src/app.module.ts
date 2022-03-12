import { MiddlewareConsumer, Module , ValidationPipe} from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/entities/user.entity';
import { Report } from './reports/entities/reports.entity';
const cookieSession = require('cookie-session');


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    UsersModule, ReportsModule,
  //   TypeOrmModule.forRoot({
  //   type: 'sqlite',
  //   database: 'db.sqlite',
  //   entities: [User, Report],
  //   synchronize: true
  // })
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService)=> {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          synchronize: true,
          entities: [User, Report]
        }
      }
    })
  ],
  providers: [AppService,
  {
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true
    }),
  }],
  controllers: [AppController]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(cookieSession({
      keys: ['a2f6bde1-90a7-4000-a5cc-fcb9c8e26221']
    })).forRoutes('*');
  }
}
