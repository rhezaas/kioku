import { LoggerTools } from '../tools'

export abstract class BaseModel {
    protected name: string
    protected color: number
    protected specializeLoggerName(__name: string, __color: number) {
        this.name = __name
        this.color = __color
    }
    protected log(...args: any[]){ LoggerTools.log(this.name, this.color, ...args) }
    protected warn(...args: any[]){ LoggerTools.warn(...args) }
    protected error(err_number: number, ...args: any[]){ LoggerTools.error(err_number, ...args) }
}