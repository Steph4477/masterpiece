import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class MerchantDto {
    @IsNotEmpty({ message: 'Le SIRET est obligatoire pour l\'inscription en tant que marchand.' })
    siret: string;
   
    @IsNotEmpty({ message: 'L\'adresse email est obligatoire pour l\'inscription.' })
    @IsEmail({}, { message: 'L\'email doit être une adresse email valide.' })
    email: string;

    @IsNotEmpty({ message: 'Le mot de passe est obligatoire pour l\'inscription.' })
    @Length(8, 20, { message: 'Le mot de passe doit être compris entre 8 et 20 caractères.' })
    password: string;

    @IsNotEmpty({ message: 'La confirmation du mot de passe est obligatoire pour l\'inscription.' })
    @Length(8, 20, { message: 'La confirmation du mot de passe doit être compris entre 8 et 20 caractères.' })
    passwordValidation: string;  
}