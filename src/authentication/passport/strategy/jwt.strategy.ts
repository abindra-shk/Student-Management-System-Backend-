import { Strategy } from "passport-strategy";
import { ExtractJwt } from "passport-jwt";
import { Request } from "express";
import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "../../../user/entities/user.entity";
import { TokenStorage } from "../../storage/token.storage";

@Injectable()
export class JwtStrategy extends Strategy {
  constructor(
    @Inject("TokenStorage")
    private readonly tokenStorage: TokenStorage
  ) { 
    super();
    this.tokenStorage = tokenStorage;
  }

  public async authenticate(req: Request): Promise<void> {
    const token: string | null = ExtractJwt.fromAuthHeaderAsBearerToken()(req);

    if (!token) {
      // @ts-ignore
      return this.fail(401);
    }

    try {
      const user: User = await this.tokenStorage.validateToken(token);
      // @ts-ignore
      this.success(user);

    } catch {
      // @ts-ignore
      this.fail(401);
    }
  }
}

export class NestJwtStrategy extends PassportStrategy(JwtStrategy, "jwt") {
}
