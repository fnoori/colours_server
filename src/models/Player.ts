export class Player {
    private _id: string
    private _username: string
    private _device: Devices
    private _isReady: false
    private _teamId: number

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get device(): Devices {
        return this._device;
    }

    set device(value: Devices) {
        this._device = value;
    }

    get isReady(): false {
        return this._isReady;
    }

    set isReady(value: false) {
        this._isReady = value;
    }

    get teamId(): number {
        return this._teamId;
    }

    set teamId(value: number) {
        this._teamId = value;
    }
}
