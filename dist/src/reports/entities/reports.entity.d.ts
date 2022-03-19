import { User } from "src/users/entities/user.entity";
export declare class Report {
    id: number;
    price: number;
    make: string;
    model: string;
    year: number;
    lng: number;
    lat: number;
    mileage: number;
    approved: boolean;
    user: User;
}
