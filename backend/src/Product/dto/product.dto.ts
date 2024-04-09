import { IsNotEmpty } from 'class-validator';

export class ProductDto {
    @IsNotEmpty({ message: 'La référence du produit est obligatoire' })
    reference: string;
    
    @IsNotEmpty({ message: 'Le nom du produit à vendre est obligatoire ' })
    name: string;

    @IsNotEmpty({ message: 'La description du produit est obligatoire' })
    description: string;

    @IsNotEmpty({ message: 'La category du produit est obligatoire' })
    category: string;

    @IsNotEmpty({ message: 'Le stock du produit est obligatoire' })
    stock: number;

    @IsNotEmpty({ message: 'Le prix du produit est obligatoire' })
    price: number;
    
}