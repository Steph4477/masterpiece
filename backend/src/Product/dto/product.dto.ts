import { IsNotEmpty, Length  } from 'class-validator';

export class ProductDto {
    @IsNotEmpty({ message: 'La référence du produit est obligatoire' })
    
    @Length (8, 8, { message: 'La référence du produit doit être de 8 caractères' })
    reference: string;

    @IsNotEmpty({ message: 'L\'image du produit est obligatoire' })
    image: string;
    
    @IsNotEmpty({ message: 'Le nom du produit à vendre est obligatoire ' })
    @Length(1, 100, { message: 'Le nom du produit doit être compris entre 1 et 100 caractères' })
    name: string;

    @IsNotEmpty({ message: 'La description du produit est obligatoire' })
    @Length(1, 500, { message: 'La description du produit doit être comprise entre 1 et 500 caractères' })
    description: string;

    @IsNotEmpty({ message: 'Le stock du produit est obligatoire' })
    @Length(1, 6, { message: 'Le stock du produit doit être compris entre 1 et 6 caractères' })
    stock: number;

    @IsNotEmpty({ message: 'Le prix du produit est obligatoire' })
    @Length(1, 6, { message: 'Le prix du produit doit être compris entre 1 et 6 caractères' })
    price: number;
}