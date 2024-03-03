import * as crypto from 'crypto';

export class MerchantHash {
  // Creating a random salt
  static generateSalt(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  // Hash the salt and password with 10000 iterations, 64 length, and sha512 digest
  static hashPassword(password: string, salt: string): string {
    const hash: string = crypto
      .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
      .toString('hex');

    // Combine salt and hashed password using a separator
    return `${salt}:${hash}`;
  }

  // Verify the password using the stored salt and hash
  static verifyPassword(inputPassword: string, storedHash: string): boolean {
    // Extract salt and hashed password from the stored value
    const [storedSalt, storedHashWithoutSalt] = storedHash.split(':');

    // Hash the input password with the stored salt
    const hash = crypto
      .pbkdf2Sync(inputPassword, storedSalt, 10000, 64, 'sha512')
      .toString('hex');

    // Compare the hashed input password with the stored hash
    return hash === storedHashWithoutSalt;
  }
}
