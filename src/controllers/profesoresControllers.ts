import { Request, Response } from "express";
import { Profesores } from "../models/profesoresModels";
import { AppDataSource } from "../db/conexion";

class ProfesoresController {

  async consultar(req: Request, res: Response) {
    try {
      const repo = AppDataSource.getRepository(Profesores);
      const profesores = await repo.find();
      res.json(profesores);
    } catch {
      res.status(500).json({ message: 'Error al obtener profesores' });
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    try {
      const repo = AppDataSource.getRepository(Profesores);
      const profesor = await repo.findOneBy({ id: Number(req.params.id) });
      res.json(profesor);
    } catch {
      res.status(500).json({ message: 'Error al obtener profesor' });
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
        const repo = AppDataSource.getRepository(Profesores);
        console.log("BODY:", req.body);
        const nuevoProfesor = repo.create(req.body);
        await repo.save(nuevoProfesor);
        res.status(201).json({ message: 'Creado correctamente' });
    } catch {
      res.status(500).json({ message: 'Error creando profesor' });
    }
  }

  async actualizar(req: Request, res: Response) {
    const {id} = req.params ;
    try {
      const repo = AppDataSource.getRepository(Profesores);

      const profesor = await repo.findOneBy({ id: Number(id) });
      if (!profesor) return res.status(404).json({ message: 'No encontrado' });

      await repo.update(Number(id), req.body);
      res.json({ message: 'Actualizado correctamente' });
    } catch {
      res.status(500).json({ message: 'Error actualizando' });
    }
  }

  async eliminar(req: Request, res: Response) {
    const {id} = req.params ;
    try {
      const repo = AppDataSource.getRepository(Profesores);

      const profesor = await repo.findOneBy({ id: Number(id) });
      if (!profesor) return res.status(404).json({ message: 'No encontrado' });

      await repo.delete(Number(id));
      res.json({ message: 'Eliminado correctamente' });
    } catch {
      res.status(500).json({ message: 'Error eliminando' });
    }
  }
}

export default new ProfesoresController();
