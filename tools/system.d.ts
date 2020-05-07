export declare class System {
    private static strong;
    private static reset;
    private static color;
    static print(...args: any[]): void;
    static specializeLog(name: string, color: number, ...args: any[]): void;
    static warn(...args: any[]): void;
    static error(err_number: number, ...args: any[]): void;
}
