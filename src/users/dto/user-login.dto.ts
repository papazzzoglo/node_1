import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Неверно указан E-mail' })
	email: string;
	@IsString({ message: 'Не указан пароль' })
	password: string;
}
