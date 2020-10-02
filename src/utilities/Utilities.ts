import * as crypto from 'crypto'
import * as _ from 'lodash'

export class Utilities {
    public static generateUniqueGameId(): string {
        let idLength = 10
        return crypto.randomBytes(idLength).toString('hex')
    }
}
