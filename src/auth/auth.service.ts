import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  public constructor(private readonly jwtSerwice: JwtService) {}
  public async createJwt(login, password, email): Promise<string> {
    const payload = {login, password, email};
    return this.jwtSerwice.sign(payload);
  }
}
