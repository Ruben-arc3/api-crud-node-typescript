import {BaseEntity, Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, ManyToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { Profesores } from "./profesoresModels";
import { Estudiantes } from "./estudiantesModels";

@Entity("cursos")
export class Cursos extends BaseEntity  {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column("text")
    descripcion: string;

    @CreateDateColumn()
    fechaCreacion: Date;
    @UpdateDateColumn()
    fechaActualizacion: Date;

    @ManyToOne(() => Profesores, (profesor) => profesor.cursos)
    @JoinColumn({ name: "profesorId" })
    profesor: Profesores;

    @ManyToMany(() => Estudiantes)
    @JoinTable({ name: "estudianteId",
        joinColumn: { name: "cursoId"},
        inverseJoinColumn: { name: "estudiante_Id" }
     }) 
    estudiantes: Estudiantes[];
}