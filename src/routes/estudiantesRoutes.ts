import express from 'express';
import EstudiantesController from '../controllers/estudiantesControllers';
const router = express.Router();

router.get('/', EstudiantesController.consultar);

router.post('/', EstudiantesController.ingresar);

router.route('/:id')
  .get(EstudiantesController.consultarDetalle)
  .put(EstudiantesController.actualizar)
  .delete(EstudiantesController.eliminar);
export default router;