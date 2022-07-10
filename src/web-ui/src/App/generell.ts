import httpStatusIndex from "./status_code"


export class HttpError extends Error {
    constructor(status_code: number, url?: string){
        let message = `${status_code} - ${httpStatusIndex[status_code.toString()]}`
        if(url){
            message += ` - ${url}`
        }
        super(message)
    }
}
