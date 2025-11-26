import { Request, Response } from "express";
import { Estudiantes } from "../models/estudiantesModels";
import { AppDataSource } from "../db/conexion";

class EstudiantesController {

  async consultar(req: Request, res: Response) {
    try {
      const repo = AppDataSource.getRepository(Estudiantes);
      const estudiantes = await repo.find();
      res.json(estudiantes);
    } catch {
      res.status(500).json({ message: 'Error al obtener estudiantes' });
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    try {
      const repo = AppDataSource.getRepository(Estudiantes);
      const estudiante = await repo.findOneBy({ id: Number(req.params.id) });
      res.json(estudiante);
    } catch {
      res.status(500).json({ message: 'Error al obtener estudiante' });
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
        const repo = AppDataSource.getRepository(Estudiantes);
        console.log("BODY:", req.body);
        const nuevoEstudiante = repo.create(req.body);
        await repo.save(nuevoEstudiante);
        res.status(201).json({ message: 'Creado correctamente' });
    } catch {
      res.status(500).json({ message: 'Error creando estudiante' });
    }
  }

  async actualizar(req: Request, res: Response) {
    const {id} = req.params ;
    try {
      const repo = AppDataSource.getRepository(Estudiantes);

      const estudiante = await repo.findOneBy({ id: Number(id) });
      if (!estudiante) return res.status(404).json({ message: 'No encontrado' });

      await repo.update(Number(id), req.body);
      res.json({ message: 'Actualizado correctamente' });
    } catch {
      res.status(500).json({ message: 'Error actualizando' });
    }
  }

  async eliminar(req: Request, res: Response) {
    const {id} = req.params ;
    try {
      const repo = AppDataSource.getRepository(Estudiantes);

      const estudiante = await repo.findOneBy({ id: Number(id) });
      if (!estudiante) return res.status(404).json({ message: 'No encontrado' });

      await repo.delete(Number(id));
      res.json({ message: 'Eliminado correctamente' });
    } catch {
      res.status(500).json({ message: 'Error eliminando' });
    }
  }
}

export default new EstudiantesController();
