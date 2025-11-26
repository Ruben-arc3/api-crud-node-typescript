import {BaseEntity, Entity,  PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("estudiantes")
export class Estudiantes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    cedula: string;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    email: string;

    @CreateDateColumn()
        fechaCreacion: Date;
        
    @UpdateDateColumn()
        fechaActualizacion: Date;
    
    
}