export class GameFullError extends Error {
    constructor() {
        let message = 'Game is full, cannot join'

        super(message);
    }
}
