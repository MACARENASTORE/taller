//Importar la bibilioteca de trabajo
import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerOptions = {
	'definition':{
		openapi:'3.0.0',
		info:{
			title:'API de la IPS AtenaIPS',
			version:'1.0.0',
			description:'En esta API tenemos la funcionalidad que soporta la operacion de la IPS AtenaIPS'
		},
		servers:[
			{
				url:'http://localhost:3001',
				description:'Servidor local de documentacion'
			}
		]
	},

	apis:['src/index.ts', './swagger/*.swagger.ts'

	]
}

export const swaggerSpec=swaggerJSDoc(swaggerOptions)

