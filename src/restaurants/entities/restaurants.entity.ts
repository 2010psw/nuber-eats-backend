import { Field, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class Restaurant{
    @Field(is => String)
    name:string;

    @Field(type=> Boolean)
    isVegan? : Boolean;

    @Field(type => String)
    address: String;

    @Field(type=> String)
    ownerName: String
}
