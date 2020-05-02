export declare class Database {
    constructor();
    private config;
    initialize(): Promise<import("typeorm").Connection>;
    synchronize(): Promise<import("typeorm").Connection>;
}
