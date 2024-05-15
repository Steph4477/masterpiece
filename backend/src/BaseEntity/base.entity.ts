import { PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

// Abstract class BaseEntityWithId to store the ID
export abstract class BaseEntityWithId extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
