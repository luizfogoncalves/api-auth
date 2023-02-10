import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ProxyModule } from "src/proxies/proxy.module";
import { DatabaseModule } from "../db/database.module";
import { userProviders } from "../db/providers/user.provider";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [...userProviders, UserService],
    imports: [ProxyModule, DatabaseModule, JwtModule],
    exports: [UserService]
})
export class UserModule {}
