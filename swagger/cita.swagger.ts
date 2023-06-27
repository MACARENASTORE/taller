export default {
    /**
     * @swagger
     *
     * /citas:
     *   get:
     *     summary: Obtener todas las citas
     *     responses:
     *       200:
     *         description: Lista de citas
     *
     * @swagger
     *
     * /citas:
     *   post:
     *     summary: Crear una cita
     *     responses:
     *       200:
     *         description: Cita creada exitosamente
     *
     * @swagger
     *
     * /citas/{idCita}:
     *   put:
     *     summary: Actualizar una cita por ID
     *     parameters:
     *       - in: path
     *         name: idCita
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Cita actualizada exitosamente
     *
     * @swagger
     *
     * /citas/{idCita}:
     *   delete:
     *     summary: Eliminar una cita por ID
     *     parameters:
     *       - in: path
     *         name: idCita
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Cita eliminada exitosamente
     *
     */
  };
  