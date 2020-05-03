export declare abstract class BaseModel {
    protected __name: string;
    protected __color: number;
    constructor(name?: string, number?: number);
    protected log: (...args: any[]) => void;
    protected warn: (...args: any[]) => void;
    protected error: (err_number: number, ...args: any[]) => void;
}
