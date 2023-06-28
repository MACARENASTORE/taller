import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.conf';
import express, { Application } from 'express';
import PacienteRouter from './routes/pacienteRoute';
import MedicoRouter from './routes/medicoRoute';
import CitaRouter from './routes/citaRoute';
import FormularioRouter from './routes/formularioRoute';

import cors from 'cors';
import helmet from 'helmet';

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
    this.app.use(cors());
    this.setupHelmet();
    this.routes();
  }

  private setupHelmet(): void {
    this.app.use(
      helmet({
        referrerPolicy: { policy: 'no-referrer' }, // Configura la política de referencia a "no-referrer"
      })
    );
  }

  private routes(): void {
    const router = express.Router();
    this.app.use('/', router);
    router.use('/', PacienteRouter);
    router.use('/', MedicoRouter);
    router.use('/', CitaRouter);
    router.use('/', FormularioRouter);
  }

  public start(): void {
    const puerto = 3000;
    this.server = this.app.listen(puerto, () => {
      console.log(`El servidor está escuchando en el puerto ${puerto}`);
    });
  }

  public close(): void {
    this.server.close();
  }
}

export default App;
