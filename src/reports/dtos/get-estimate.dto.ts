import { IsNotEmpty, IsString, Max, Min, IsLongitude, IsLatitude, IsNumber } from "class-validator";
import { Transform } from "class-transformer";

export class GetEstimateDTO{
    @IsString()
    @IsNotEmpty()
    make: string;

    @IsString()
    @IsNotEmpty()
    model: string;

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    @IsNotEmpty()
    @Min(1930)
    @Max(2050)
    year: number;

    @Transform(({ value }) => parseInt(value))
    @IsNumber()
    @IsNotEmpty()
    @Min(35)
    @Max(1000000)
    mileage: number;

    @Transform(({ value }) => parseFloat(value))
    @IsLongitude()
    @IsNotEmpty()
    lng: number;

    @Transform(({ value }) => parseFloat(value))
    @IsLongitude()
    @IsNotEmpty()
    lat: number;

}