import {BaseEntity, Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { Cursos } from "./cursoModels";

@Entity("profesores")
export class Profesores extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    cedula: string;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    email: string;
    @Column()
    profesion: string;
    @Column()
    telefono: string;
    


    @CreateDateColumn()
    fechaCreacion: Date;
    
    @UpdateDateColumn()
    fechaActualizacion: Date;

    @OneToMany(() => Cursos, (curso) => curso.profesor) 

    cursos: Cursos[];

}