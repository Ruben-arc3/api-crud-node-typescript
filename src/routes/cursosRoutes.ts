import express from 'express';
import cursoControllers from '../controllers/cursoControllers';
const router = express.Router();

router.get('/', cursoControllers.consultar);

router.post('/', cursoControllers.ingresar);
router.route('/:id')
  .get(cursoControllers.consultarDetalle)
  .put(cursoControllers.actualizar)
  .delete(cursoControllers.eliminar);

export default router;