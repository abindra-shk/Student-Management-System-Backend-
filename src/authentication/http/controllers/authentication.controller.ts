import { Controller, HttpException, HttpStatus, Inject, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import * as bcrypt from "bcrypt";

import { ApiBody, ApiTags } from "@nestjs/swagger";
import { User } from "../../../user/entities/user.entity";
import { TokenStorage } from "../../storage/token.storage";
import { Req } from "../../../core/http/request/request";
import { UserDetailResponse } from "../response/user-detail.response";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";

@ApiTags("Authentication")
@Controller()
export class AuthenticationController {
  constructor(
    private jwtService: JwtService,
    @Inject("TokenStorage")
    private readonly tokenStorage: TokenStorage,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
  }
  private _createToken({ data }): any {
    const expiresIn = '15d';
    const secret = "secretkey";
    const user = { data };
    const accessToken = this.jwtService.sign(user);
    return {
      secret,
      expiresIn,
      accessToken,
    };
  }

  @UseGuards(AuthGuard("local"))
  @Post("/authentication")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        username: {
          type: "string"
        },
        password: {
          type: "string"
        }
      }
    }
  })
  async login(@Request() req: Req) {
    console.log(req.user)
    const [user, token] = await Promise.all([
      await this.userRepository.findOne({ where: { id: req.user.id } }),
      this.tokenStorage.generateToken(req.user)
    ]);
    return {
      user: new UserDetailResponse({
        ...user
      }),
      accessToken: token,
      refreshToken: token, // Todo: will implement later
      tokenType: "bearer"
    };
  }
  // async login(@Request() req: Req) {
  //   console.log('req.user:', req.user);
  //    try {
  //     if (!req.user || !req.user.username) {
  //       throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  //     }
  
  //     const [user, token] = await Promise.all([
  //       await this.userRepository.findOne({ where: { id: req.user.id } }),
  //       this.tokenStorage.generateToken(req.user)
  //     ]);
  
  //     if (!user) {
  //       throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
  //     }
  
  //     return {
  //       user: new UserDetailResponse({
  //         ...user
  //       }),
  //       accessToken: token,
  //       refreshToken: token, // Todo: will implement later
  //       tokenType: "bearer"
  //     };
  //   } catch (error) {
  //     throw new HttpException('Authentication failed', HttpStatus.UNAUTHORIZED);
  //   }
  // }

  @Post("/me")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        username: {
          type: "string"
        },
        password: {
          type: "string"
        }
      }
    }
  })
  async loginUser(req) {
    const user = await this.userRepository.findOne({ where: { username: req.username } });
    const token = await this.tokenStorage.generateToken({
      data: {
        id: user.id,
        username: user.username,
        password: user.password
      }
    });



    if (!user) {
      throw new HttpException("User not found", HttpStatus.UNAUTHORIZED);
    }


    const areEqual = await comparePasswords(user.password, req.password);

    if (!areEqual) {
      throw new HttpException(
        "Username or password is incorrect",
        HttpStatus.UNAUTHORIZED
      );
    } else {
      return {
        user: new UserDetailResponse({
          ...user
        }),
        accessToken: token,
        refreshToken: token, // Todo: will implement later
        tokenType: "bearer"
      };
    }
  }
}


export const comparePasswords = async (userPassword, currentPassword) => {
  return await bcrypt.compare(currentPassword, userPassword);
};
