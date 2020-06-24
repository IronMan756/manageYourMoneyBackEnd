import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class UserDto{
    @ApiPropertyOptional()
    public login?: string;
    @ApiProperty()
    public email!: string;
    @ApiProperty()
    public password!: string; 
    
    public _id?: string;

    public accessToken: string;

}