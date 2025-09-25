import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";


export class CategoryRules{
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string | null;


    @IsBoolean()
    @IsNotEmpty
    is_active: boolean;

    constructor({name, description, is_active, created_at}: Category){
        Object.assign(this, {name, description, is_active});
}

class CategoryValidator{

    validate(entity: Category){
        validateSync
    }
    

}