// merchant.service.ts
import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class MerchantService {
    private readonly client = new Client({
        type: 'postgres',
        host: process.env.DB_HOST,
        database: 'Database',
        username: 'useradmin',
        password: 'password',
        port: 5432,
    });

    async createMerchant(formData: any): Promise<any> {
        await this.client.connect();

        try {
            const result = await this.client.query(
                'INSERT INTO merchant (lastName, firstName, email, password, siret, headQuarter) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [
                    formData.lastName,
                    formData.firstName,
                    formData.email,
                    formData.password,
                    formData.siret,
                    formData.headQuarter,
                ],
            );

            return result.rows[0];
        } finally {
            await this.client.end();
        }
    }
}
