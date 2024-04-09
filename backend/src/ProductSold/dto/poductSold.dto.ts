import { IsNotEmpty } from 'class-validator';

export class ProductSoldDto {
    
    @IsNotEmpty({ message: 'La référence du produit est obligatoire' })
    reference: string;
    
    @IsNotEmpty({ message: 'Le nom du produit à vendre est obligatoire ' })
    price: number;

    @IsNotEmpty({ message: 'La description du produit est obligatoire' })
    stock: number;
    
}