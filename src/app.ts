/* eslint-disable no-mixed-spaces-and-tabs */
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express,{Application, Request, Response} from 'express'

import PacienteRouter from './routes/pacienteRoute'
import MedicoRouter from './routes/medicoRoute'
import CitaRouter from './routes/citaRoute'
import FormularioRouter from './routes/formularioRoute'

import cors from 'cors'

/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @author Diego Fernando Barreto Pirateque
 * @description Clase inicial de ejemplo para manejar rutas y documentación
 */
class App{

	//Atributos
	public app:Application
	private server:any
	

	/**
     * Método constructor de la clase
     * 
     * @author Diego Fernando Barreto Pirateque
     */
	constructor(){

		/**
         * Express es la biblioteca para definir API en el ecosistema de Node.js
         */
		this.app=express()

		this.app.use(express.json())
		this.app.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		)
		this.app.use(cors())
		this.routes()
	}

	/**
	 * Definir y agregar las rutas de la API con express
	 */
	private routes():void{
		
        this.app.use('/', PacienteRouter)
		this.app.use('/', MedicoRouter)
		this.app.use('/', CitaRouter)
		this.app.use('/', FormularioRouter)
	}

	public start():void{

		const puerto = 3001

		this.server=this.app.listen(
			puerto,
			()=>{console.log(`El servidor está escuchando en el puerto ${puerto}`)}
		)
	}

	public close():void{
		this.server.close()
	}

}

export default App