import { LoggerTools } from '../tools'

export abstract class BaseModel {
    protected __name: string
    protected __color: number

    constructor(name?: string, number?: number) {
        this.__name = name.toUpperCase()
        this.__color = number
    }

    protected log = (...args: any[]) => LoggerTools.log(this.__name, this.__color, ...args)
    protected warn = (...args: any[]) => LoggerTools.warn(...args)
    protected error = (err_number: number, ...args: any[]) => LoggerTools.error(err_number, ...args)
}