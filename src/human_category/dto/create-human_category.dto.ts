import { IsNumber, IsString } from "class-validator";

export class CreateHumanCategoryDto {
    @IsString({message: "Human_category name must be string"})
    name: string

    @IsNumber({}, {message: "Human_Category's start_age must be number"})
    start_age: number

    @IsNumber({}, {message: "Human_Category's finish_age must be number"})
    finish_age: number

    @IsNumber({}, {message: "Human_Category's gender must be number"})
    gender: number 
}
