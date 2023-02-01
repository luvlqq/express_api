import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'incorrect email' })
	email: string;
	@IsString({ message: 'password is empty' })
	password: string;
	@IsString({ message: 'name is empty' })
	name: string;
}
