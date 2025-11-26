import { DataSource } from "typeorm";
import { Estudiantes } from "../models/estudiantesModels";
import { Profesores } from "../models/profesoresModels";
import { Cursos } from "../models/cursoModels";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "cursos",
    synchronize: false,
    logging: true,
    entities: [Estudiantes, Cursos, Profesores],
})