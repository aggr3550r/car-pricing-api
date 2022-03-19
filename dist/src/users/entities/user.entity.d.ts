import { Report } from "src/reports/entities//reports.entity";
export declare class User {
    id: number;
    email: string;
    username: string;
    password: string;
    admin: boolean;
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
    reports: Report[];
}
