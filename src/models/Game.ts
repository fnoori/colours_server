import {Player} from "./Player";

class Game {
    private _gameId: string
    private _players: Player[]
    private _playerTurn: number
    private _teamPoints: object

    constructor() {
        this.initializeTeamPoints()
    }

    private initializeTeamPoints() {
        this._teamPoints = {
            0: 0,
            1: 0
        }
    }

    get gameId(): string {
        return this._gameId;
    }

    set gameId(value: string) {
        this._gameId = value;
    }

    get players(): Player[] {
        return this._players;
    }

    set players(value: Player[]) {
        this._players = value;
    }

    get playerTurn(): number {
        return this._playerTurn;
    }

    set playerTurn(value: number) {
        this._playerTurn = value;
    }
}
