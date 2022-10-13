import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class ExternalLoggerDto {
    @IsNotEmpty()
    @IsString()
    origin: string;

    @IsNotEmpty()
    @IsString()
    data: string;

    @IsString()
    date: Date;
}