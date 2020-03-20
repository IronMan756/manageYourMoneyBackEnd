import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly jwtSerwice;
    constructor(jwtSerwice: JwtService);
    createJwt(user: any): Promise<string>;
}
