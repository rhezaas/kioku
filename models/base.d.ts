export declare abstract class BaseModel {
    protected name: string;
    protected color: number;
    protected specializeLoggerName(__name: string, __color: number): void;
    protected log(...args: any[]): void;
    protected warn(...args: any[]): void;
    protected error(err_number: number, ...args: any[]): void;
}
