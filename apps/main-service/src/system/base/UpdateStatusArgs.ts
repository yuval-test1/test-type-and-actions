import { ObjectType, Field } from "@nestjs/graphql";
import { UpdateStatusInput } from "./UpdateStatusInput";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType()
class UpdateStatusArgs {
    @Field(() => UpdateStatusInput)
    @ApiProperty({
        required: true,
        type: () => UpdateStatusInput
    })
    @Type(() => UpdateStatusInput)
    data: UpdateStatusInput;
}

export { UpdateStatusArgs as UpdateStatusArgs };