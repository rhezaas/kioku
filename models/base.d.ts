export declare abstract class BaseModel {
    protected name: string;
    protected color: number;
    protected log(...args: any[]): void;
    protected warn(...args: any[]): void;
    protected error(err_number: number, ...args: any[]): void;
}
