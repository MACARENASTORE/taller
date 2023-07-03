import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.conf';
import express, { Application } from 'express';
import PacienteRouter from './routes/pacienteRoute';
import MedicoRouter from './routes/medicoRoute';
import CitaRouter from './routes/citaRoute';
import FormularioRouter from './routes/formularioRoute';
import EspecialidadRouter from './routes/especialidadRoute';
import cors from 'cors';

class App {
  public app: Application;
  private server: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec)
    );

    // Agregar el middleware CORS con las opciones deseadas
    this.app.use(cors({
      origin: '*',
      methods: 'GET, POST, PUT, DELETE',
      exposedHeaders: 'content-type',
    }));

    

    this.routes();
  }

  private routes(): void {
    const router = express.Router();
    this.app.use('/', router);
    router.use('/', PacienteRouter);
    router.use('/', MedicoRouter);
    router.use('/', CitaRouter);
    router.use('/', FormularioRouter);
    router.use('/', EspecialidadRouter);
  }

  public start(): void {
    const puerto = 3001;
    this.server = this.app.listen(puerto, () => {
      console.log(`El servidor está escuchando en el puerto ${puerto}`);
    });
  }

  public close(): void {
    this.server.close();
  }
}

export default App;
