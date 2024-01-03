import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { User } from "../user/entities/user.entity";
import { NestJwtStrategy } from "./passport/strategy/jwt.strategy";
import { AuthenticationController } from "./http/controllers/authentication.controller";
import { BcryptService } from "./services/bcrypt.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TokenStorageProvider } from "./providers/token-storage.provider";
import { DatabaseStrategy } from "./passport/strategy/database.strategy";
import { CoreModule } from "../core/core.module";
import { JwtStorage } from "./storage/jwt.storage";
import { CqrsModule } from "@nestjs/cqrs";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User]), CoreModule, PassportModule.register({ defaultStrategy: "jwt" })],
  providers: [DatabaseStrategy,JwtService, NestJwtStrategy, TokenStorageProvider, BcryptService, JwtStorage],
  controllers: [AuthenticationController],
  exports: [BcryptService, JwtStorage]
})
export class AuthenticationModule {
}
