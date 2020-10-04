import {Player} from "./Player";
import {GameFullError} from "../exceptions/GameFullError";
import * as _ from 'lodash'
import {Utilities} from "../utilities/Utilities";
import {Card} from "./Card";

export class Game {
    private readonly MAX_PLAYERS = 4

    private _gameId: string
    private _players: Array<Player>
    private _playerTurn: number
    private _teamPoints: object
    private _cards: [Card]

    constructor() {
        this._players = []
        this._gameId = Utilities.generateUniqueGameId()
        this.initializeTeamPoints()
    }

    private initializeTeamPoints() {
        this._teamPoints = {
            0: 0,
            1: 0
        }
    }

    public addPlayer(player: Player) {
        this.gameIsFull()

        this._players.push(player)
    }

    private gameIsFull() {
        if (this._players !== undefined && this._players.length >= this.MAX_PLAYERS) {
            throw new GameFullError()
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
