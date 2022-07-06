import httpStatusIndex from "./status_code"


export class HttpError extends Error {
    constructor(status_code: number){
        const message = httpStatusIndex[status_code.toString()]
        super(message)
    }
}
