import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private readonly jwtSerwice;
    private readonly _userServise;
    constructor(jwtSerwice: JwtService, _userServise: UsersService);
    createJwt(login: any, password: any, email: any): Promise<string>;
}
