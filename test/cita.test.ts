import request from "supertest";
import App from "../src/app";

describe("Cita API", () => {
  let app: App;

  beforeAll(() => {
    app = new App();
    app.start();
  });

  afterAll(() => {
    app.close();
  });

  test('GET /citas - Debe obtener una respuesta exitosa al obtener todas las citas', async () => {
    const response = await request(app.app).get('/citas');
    expect(response.status).toBe(200);
  }, 20000);

  test('POST /citas - Debe crear una nueva cita', async () => {
    const citaData = {
      idCita: 123456,
      fechaCita: '2023-06-19',
      pacienteCedula: '1234567890',
      medicoTarjetaProfesional: 'ABC123',
    };

    const response = await request(app.app).post('/citas').send(citaData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('idCita', 123456);
  }, 20000);

  test('PUT /citas/idCita - Debe actualizar una cita existente', async () => {
    const citaData = {
      fechaCita: '2023-06-20',
      pacienteCedula: '0987654321',
      medicoTarjetaProfesional: 'XYZ789',
    };

    const response = await request(app.app).put('/citas/123456').send(citaData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('fechaCita', '2023-06-20');
  }, 20000);

  test('DELETE /citas/idCita - Debe eliminar una cita existente', async () => {
    const response = await request(app.app).delete('/citas/123456');
    expect(response.status).toBe(204);
  }, 20000);

})