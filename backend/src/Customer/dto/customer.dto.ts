import { IsNotEmpty, Length  } from 'class-validator';

export class CustomerDto {
    @IsNotEmpty({ message: 'Le numéro client est obligatoire' })
    @Length (8, 8, { message: 'Le numéro client doit être de 8 caractères' })
    reference: string;

    image: string;
    
    @IsNotEmpty({ message: 'Le prénom et le nom du client est obligatoire ' })
    @Length(1, 100, { message: 'Le prénon et le nom du client doit être compris entre 1 et 100 caractères' })
    name: string;

    @Length(1, 500, { message: 'La description du produit doit être comprise entre 1 et 500 caractères alphanumériques' })
    orders: number;

    @Length(1, 6, { message: 'Le stock du produit doit être compris entre 1 et 6 caractères alphanumériques' })
    average: number;

    @Length(1, 6, { message: 'Le prix du produit doit être compris entre 1 et 6 caractères alphanumériques' })
    total: number;
}