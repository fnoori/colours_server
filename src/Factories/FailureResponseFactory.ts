import {GameResponse} from "../Models/GameResponse";

export class FailureResponseFactory {
    public static buildFailureResponseWithMessage(message: string): GameResponse {
        const failureResponse = new GameResponse()

        failureResponse.isSuccessful = false
        failureResponse.exception = undefined
        failureResponse.message = message

        return failureResponse
    }

    public static buildFailureMessageWithException(exception: Error): GameResponse {
        const failureResponse = new GameResponse()

        failureResponse.isSuccessful = false
        failureResponse.exception = exception
        failureResponse.message = exception.message

        return failureResponse
    }
}
