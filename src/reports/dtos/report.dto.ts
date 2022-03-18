import { Expose, Transform } from "class-transformer";
import { User } from "src/users/entities/user.entity";


export class ReportDTO{
    @Expose()
    id: number;
    @Expose()
    price: number;
    @Expose()
    year: number;
    @Expose()
    lng: number;
    @Expose()
    lat: number;
    @Expose()
    make: string;
    @Expose()
    model: string;
    @Expose()
    mileage: number;
    @Expose()
    approved: boolean;

    @Transform(({obj}) => obj.user.id)
    @Expose()
    userID: number;

    @Transform(({obj}) => obj.user.email)
    @Expose()
    userEmail: string;

    @Transform(({obj}) => obj.user.username)
    @Expose()
    username: string;
}