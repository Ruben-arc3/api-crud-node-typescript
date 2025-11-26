import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan'; 
import profesoresRoutes from './routes/profesoresRoutes';
import estudiantesRoutes from './routes/estudiantesRoutes';
import cursosRoutes from './routes/cursosRoutes'; 


const app = express();
app.use(express.json());


app.use(cors());
app.use(morgan('dev'));

app.get('/', (req:Request, res:Response) => {
  res.send('Hello, World!');
}   );


app.use('/cursos', cursosRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/estudiantes', estudiantesRoutes);
app.use(express.static("src/views"));

export default app; 










