import { Module } from "@nestjs/common";
import { ProxyModule } from "src/proxies/proxy.module";
import { DatabaseModule } from "../db/database.module";
import { userProviders } from "../db/providers/user.provider";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [...userProviders, UserService],
    imports: [ProxyModule, DatabaseModule],
    exports: [UserService]
})
export class UserModule {}
