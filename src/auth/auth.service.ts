import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  public constructor(private readonly jwtSerwice: JwtService) {}
  public async createJwt(user: any): Promise<string> {
    const payload = { phone: user.email };
    return this.jwtSerwice.sign(payload);
  }
}
