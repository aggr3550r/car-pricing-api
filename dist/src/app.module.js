"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const users_module_1 = require("./users/users.module");
const reports_module_1 = require("./reports/reports.module");
const user_entity_1 = require("./users/entities/user.entity");
const reports_entity_1 = require("./reports/entities/reports.entity");
const cookieSession = require('cookie-session');
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(cookieSession({
            keys: ['a2f6bde1-90a7-4000-a5cc-fcb9c8e26221']
        })).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`
            }),
            users_module_1.UsersModule, reports_module_1.ReportsModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        type: 'sqlite',
                        database: config.get('DB_NAME'),
                        synchronize: true,
                        entities: [user_entity_1.User, reports_entity_1.Report]
                    };
                }
            })
        ],
        providers: [app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useValue: new common_1.ValidationPipe({
                    whitelist: true
                }),
            }],
        controllers: [app_controller_1.AppController]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map