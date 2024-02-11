import { IsString } from "class-validator";

export class CreateSubjectDto {
    @IsString()
    subjectName: string;

    @IsString()
    class: string; // Assuming class is also a string
}
