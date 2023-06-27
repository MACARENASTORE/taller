import request from "supertest";
import App from "../src/app";

describe("Medico API", () => {
  let app: App;

  beforeAll(() => {
    app = new App();
    app.start();
  });

  afterAll(() => {
    app.close();
  });

   test("GET /medicos - Debe obtener una respuesta exitosa al obtener todos los médicos", async () => {
    const response = await request(app.app).get("/medicos");
    expect(response.status).toBe(200);
  }, 20000);

  test('POST /:crear_medicos - Debe crear un nuevo médico', async () => {
    const medicoData = {
      tarjetaProfesional: 123456,
      nombre: 'John',
      apellido: 'Doe',
      consultorio: 'A1',
      correo: 'john.doe@example.com',
    };

    const response = await request(app.app)
      .post('/:crear_medicos')
      .send(medicoData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('tarjetaProfesional', 123456);
  }, 20000);

  test('PUT /actualizar_medico/:tarjetaProfesional - Debe actualizar un médico existente', async () => {
    const medicoData = {
      nombre: 'John',
      apellido: 'Doe',
      consultorio: 'A2',
      correo: 'john.doe@example.com',
    };

    const response = await request(app.app)
      .put('/actualizar_medico/123456')
      .send(medicoData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('nombre', 'John');
  }, 20000);

  test('DELETE /eliminar_medico/:tarjetaProfesional - Debe eliminar un médico existente', async () => {
    const response = await request(app.app).delete('/eliminar_medico/123456');
    expect(response.status).toBe(204);
  }, 20000);
});
