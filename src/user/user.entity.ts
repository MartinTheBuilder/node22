import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    email: string;
    @Column()
    password: string;

}