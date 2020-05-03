export declare abstract class BaseModel {
    protected __name: string;
    constructor(name?: string);
    protected log: (...args: any[]) => void;
    protected warn: (...args: any[]) => void;
    protected error: (err_number: number, ...args: any[]) => void;
}
