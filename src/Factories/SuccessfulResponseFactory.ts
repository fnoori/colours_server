import {GameResponse} from "../Models/GameResponse";

export class SuccessfulResponseFactory {
    public static buildSuccessfullyCreatedGameResponse(gameId: string): GameResponse {
        const message = `successfully created game: ${gameId}`
        return SuccessfulResponseFactory.buildSuccessfulResponse(message)
    }

    public static buildSuccessfullyJoinedGameResponse(details: {name: string, gameId: string}): GameResponse {
        const message = `${details.name} successfully joined game ${details.gameId}`
        return SuccessfulResponseFactory.buildSuccessfulResponse(message)
    }

    private static buildSuccessfulResponse(message: string): GameResponse {
        let successResponse = new GameResponse()

        successResponse.isSuccessful = true
        successResponse.message = message

        return successResponse
    }
}
