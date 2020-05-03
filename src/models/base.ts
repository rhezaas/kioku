import { LoggerTools } from '../tools'

export abstract class BaseModel {
    protected __name: string

    constructor(name?: string) {
        this.__name = name.toUpperCase()
    }

    protected log = (...args: any[]) => LoggerTools.log(this.__name, ...args)
    protected warn = (...args: any[]) => LoggerTools.warn(...args)
    protected error = (err_number: number, ...args: any[]) => LoggerTools.error(err_number, ...args)
}