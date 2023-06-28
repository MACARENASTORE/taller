import request from "supertest";
import App from "../src/app";

describe("Paciente API", () => {
  let app: App;

  beforeAll(() => {
    app = new App();
    app.start();
  });

  afterAll(() => {
    app.close();
  });

  test("GET /paciente - Debe obtener una respuesta exitosa al obtener todos los pacientes", async () => {
    const response = await request(app.app).get("/paciente");
    expect(response.status).toBe(200);
  }, 20000);

  test("POST /crear_paciente - Debe crear un nuevo paciente", async () => {
    const pacienteData = {
      cedula: 123456789,
      nombre: "John",
      apellido: "Doe",
      fecha: "1990-01-01",
      telefono: "1234567890",
    };

    const response = await request(app.app)
      .post("/crear_paciente")
      .send(pacienteData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("cedula", 123456789);
  }, 20000);

  test("PUT /actualizar_paciente/cedula - Debe actualizar un paciente existente", async () => {
    const pacienteData = {
      cedula: 123456789,
      nombre: "John",
      apellido: "Doe",
      fecha: "1990-01-01",
      telefono: "1234567890",
    };

    const response = await request(app.app)
      .put("/actualizar_paciente/123456789")
      .send(pacienteData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("nombre", "John");
  }, 20000);

  test("DELETE /eliminar_paciente/cedula - Debe eliminar un paciente existente", async () => {
    const response = await request(app.app).delete("/eliminar_paciente/123456789");
    expect(response.status).toBe(200);
  }, 20000);
});
