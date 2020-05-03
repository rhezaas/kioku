export class LoggerTools{
    private static strong: string = '\x1b[1m'
    private static reset: string = '\x1b[0m'
    private static color = (code: number): string => `\x1b[38;5;${code}m`

    public static log(name?: string, color?: number, ...args: any[]) {
        console.log(`${this.strong}${this.color(color??51)}%s${this.reset}`, `[ ${name??'LOGGER'} ]`, ...args)
    }

    public static warn(...args: any[]) {
        console.warn(`${this.strong}${this.color(208)}%s${this.reset}`, `[ WARN!! ]`, ...args)
    }

    public static error(err_number: number, ...args: any[]) {
        console.error(`${this.strong}${this.color(196)}%s1${this.reset}${this.strong}${this.color(208)}%s2${this.reset}`, '[ ERROR! ]', `[ ${err_number} ]`, ...args)
    }
    
}