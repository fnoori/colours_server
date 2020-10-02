import { createServer, Server } from 'http'
import * as express from 'express'
import * as socketIo from 'socket.io'
import {Game} from "./Models/Game";
import {Player} from "./Models/Player";

export class GameServer {
    public static readonly PORT:number = Number(process.env.PORT) || 3000
    private app: express.Application
    private server: Server
    private io: socketIo.Server
    private port: string | number

    private games = {}

    constructor() {
        this.createApp()
        this.config()
        this.createServer()
        this.sockets()
        this.listen()
    }

    public getApp(): express.Application {
        return this.app
    }

    private createApp(): void {
        this.app = express()
    }

    private createServer(): void {
        this.server = createServer(this.app)
    }

    private config(): void {
        this.port = process.env.PORT || GameServer.PORT
    }

    private sockets(): void {
        this.io = socketIo(this.server)
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log(`Running server on port ${this.port}`)
        })

        this.io.on('connect', (socket: any) => {
            console.log(`Client connected on port ${this.port}`)

            socket.on('create-game', (name: string) => {
                try {
                    let game = new Game()
                    let player = new Player()
                    player.name = name
                    player.socketId = socket.id

                    game.addPlayer(player)

                    this.games[game.gameId] = game

                    socket.emit('create-game', 'successfully created game')
                } catch (e) {
                    socket.emit('create-game', 'failed to create game')
                }
            })

            socket.on('join-game', (details: {
                gameId: string,
                name: string
            }) => {
                try {
                    let game = this.games[details.gameId]

                    let player = new Player()
                    player.name = details.name
                    player.socketId = socket.id

                    game.addPlayer(player)

                    this.io.emit('join-game', `${details.name} successfully joined game ${details.gameId}`)
                } catch (e) {
                    socket.emit('join-game', `failed to join game ${details.gameId}`)
                }
            })

            socket.on('message', (m: string) => {
                console.log(`[server](message): ${m}`)
                this.io.emit('message', m)
            })

            socket.on('disconnect', () => {
                console.log('Client disconnected')
            })
        })
    }
}
