export default {
  /**
   * @swagger
   *
   * /paciente:
   *   get:
   *     summary: Obtener todos los pacientes
   *     responses:
   *       200:
   *         description: Lista de pacientes
   *
  
  
   * @swagger
   *
   * /crear_paciente:
   *   post:
   *     summary: Crear un paciente
   *     responses:
   *       200:
   *         description: Paciente creado exitosamente
   *
   
  
   * @swagger
   *
   * /actualizar_paciente/{cedula}:
   *   put:
   *     summary: Actualizar un paciente por cedula
   *     parameters:
   *       - in: path
   *         name: cedula
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Paciente actualizado exitosamente
   *
    
  
   * @swagger
   *
   * /eliminar_paciente/{cedula}:
   *   delete:
   *     summary: Eliminar un paciente por cedula
   *     parameters:
   *       - in: path
   *         name: cedula
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Paciente eliminado exitosamente
   *
   */
};
