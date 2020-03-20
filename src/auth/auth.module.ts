import { Module } from '@nestjs/common';
import { AuthController } from "./auth.controler";
import { AuthService } from "./auth.service";

@Module({
  controllers: [AuthController],
  exports: [AuthService],
//   imports: [],
  providers: [AuthService]
})
export class AuthModule {
}