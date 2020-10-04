export class GameResponse {
    private _isSuccessful: boolean
    private _message: string
    private _exception?: Error

    get asJson(): string {
        return JSON.stringify(this)
    }

    get isSuccessful(): boolean {
        return this._isSuccessful;
    }

    set isSuccessful(value: boolean) {
        this._isSuccessful = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    get exception(): Error {
        return this._exception;
    }

    set exception(value: Error) {
        this._exception = value;
    }
}
