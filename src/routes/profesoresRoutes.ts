import express from 'express';
import ProfesoresController from '../controllers/profesoresControllers';
const router = express.Router();

router.get('/', ProfesoresController.consultar);

router.post('/', ProfesoresController.ingresar);

router.route('/:id')
  .get(ProfesoresController.consultarDetalle)   
  .put(ProfesoresController.actualizar)
  .delete(ProfesoresController.eliminar);


export default router; 