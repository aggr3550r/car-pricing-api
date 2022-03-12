import { IsNotEmpty, IsString, Max, Min, IsLongitude, IsLatitude, IsNumber } from "class-validator";


export class CreateReportDTO{
    @IsString()
    @IsNotEmpty()
    make: string;

    @IsString()
    @IsNotEmpty()
    model: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1930)
    @Max(2050)
    year: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(35)
    @Max(1000000)
    mileage: number;


    @IsLongitude()
    @IsNotEmpty()
    lng: number;

    @IsLongitude()
    @IsNotEmpty()
    lat: number;

    @IsNumber()
    @Max(1000000)
    price: number;
}