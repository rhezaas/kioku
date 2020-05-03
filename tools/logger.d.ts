export declare class LoggerTools {
    private static strong;
    private static reset;
    private static color;
    static log(name?: string, color?: number, ...args: any[]): void;
    static warn(...args: any[]): void;
    static error(err_number: number, ...args: any[]): void;
}
