import * as crypto from 'crypto'

export class Utilities {
    public generateUniqueGameId(): string {
        let idLength = 10
        return crypto.randomBytes(idLength).toString('hex')
    }
}
