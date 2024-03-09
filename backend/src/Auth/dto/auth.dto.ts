import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class AuthDto {
  @IsNotEmpty({ message: 'L\'adresse email est obligatoire pour la connection.' })
  @IsEmail({}, { message: 'L\'email doit être une adresse email valide.' })
  email: string;

  @IsNotEmpty({ message: 'Le mot de passe est obligatoire pour la connection.' })
  @Length(8, 20, { message: 'Le mot de passe doit être compris entre 8 et 20 caractères.' })
  password: string;
}
