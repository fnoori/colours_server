"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServer = void 0;
const http_1 = require("http");
const express = require("express");
const socketIo = require("socket.io");
class GameServer {
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    getApp() {
        return this.app;
    }
    createApp() {
        this.app = express();
    }
    createServer() {
        this.server = http_1.createServer(this.app);
    }
    config() {
        this.port = process.env.PORT || GameServer.PORT;
    }
    sockets() {
        this.io = socketIo(this.server);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Running server on port ${this.port}`);
        });
        this.io.on('connect', (socket) => {
            console.log(`Client connected on port ${this.port}`);
            socket.on('message', (m) => {
                console.log(`[server](message): ${m}`);
                this.io.emit('message', m);
            });
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
}
exports.GameServer = GameServer;
GameServer.PORT = Number(process.env.PORT) || 3000;
//# sourceMappingURL=GameServer.js.map