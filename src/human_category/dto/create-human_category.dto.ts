import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateHumanCategoryDto {
    @ApiProperty({example: "human", description: "Humam's name"})
    @IsString({message: "Human_category name must be string"})
    name: string

    @ApiProperty({example: "3", description: "Humam's minimum age"})
    @IsNumber({}, {message: "Human_Category's start_age must be number"})
    start_age: number

    @ApiProperty({example: "78", description: "Humam's maximum age"})

    @IsNumber({}, {message: "Human_Category's finish_age must be number"})
    finish_age: number

    @ApiProperty({example: "2", description: "Humam's sex, connection with gender table"})
    @IsNumber({}, {message: "Human_Category's gender must be number"})
    gender: number 
}
