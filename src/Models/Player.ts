export class Player {
    private _id: string
    private _socketId: number
    private _name: string
    private _device: Devices
    private _isReady: false
    private _teamId: number

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get socketId(): number {
        return this._socketId;
    }

    set socketId(value: number) {
        this._socketId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
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
