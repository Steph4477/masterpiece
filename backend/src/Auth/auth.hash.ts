import * as crypto from 'crypto';

export class merchantHash {
  // Creating a random salt
  static salt: string = process.env.SALT_SECRET || "default" ;

  static generateSalt(): string {
    if (!process.env.SALT_SECRET) {
      throw new Error('SALT_SECRET is not defined in the environment.');
    }
    return crypto.randomBytes(16).toString('hex');
  }

  // Hash the salt and password with 10000 iterations, 64 length and sha512 digest
  static hashPassword(password: string): string {
    const hash: string = crypto
      .pbkdf2Sync(password, merchantHash.salt, 10000, 64, 'sha512')
      .toString('hex');

    return hash;
  }

  // Hash the salt and password with 10000 iterations, 64 length and sha512 digest
  static verifyPassword(inputPassword: string, storedHash: string): boolean {
    const hash = crypto
      .pbkdf2Sync(inputPassword, merchantHash.salt, 10000, 64, 'sha512')
      .toString('hex');

    return hash === storedHash;
  }
}