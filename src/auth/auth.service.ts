import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  public constructor(
    private readonly jwtSerwice: JwtService,
    private readonly _userServise: UsersService) {}
  public async createJwt(login, password, email): Promise<string> {
    const payload = {login, password, email};
    return this.jwtSerwice.sign(payload);
  }
}
