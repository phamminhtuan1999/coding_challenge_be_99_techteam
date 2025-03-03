import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from "mongodb";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@Entity("users")
export class User {
  @ObjectIdColumn()
  _id!: ObjectId;

  @Column()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Column()
  @IsEmail()
  @IsOptional()
  email?: string;

  @Column()
  @IsString()
  @IsOptional()
  description?: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt!: Date;
}
