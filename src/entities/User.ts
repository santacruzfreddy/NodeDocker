import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombres_completos: string;

    @Column()
    link_github: string;

    @Column('simple-array')
    tecnologias_conocidas: string[];    
}