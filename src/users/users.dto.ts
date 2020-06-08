import { ApiProperty } from '@nestjs/swagger';
export class UserDto{
    @ApiProperty()
    public login?: string;
    @ApiProperty()
    public email!: string;
    @ApiProperty()
    public password!: string; 
}