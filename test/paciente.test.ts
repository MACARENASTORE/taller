import request from "supertest";
import app from "../src/app";


test("Debe obtener un código de respuesta exitoso al obtener todos los pacientes", async () => {
  const response = await request(app).get("/paciente");
  expect(response.statusCode).toBe(200);
}, 20000);

test("Debe crear un nuevo paciente", async () => {
  const pacienteData = {
    cedula: 123456789,
    nombre: "John",
    apellido: "Doe",
    fecha: "1990-01-01",
    telefono: "1234567890",
  };

  const response = await request(app)
    .post("/crear_paciente")
    .send(pacienteData);
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty("cedula", 123456789);
}, 20000);

test("Debe actualizar un paciente existente", async () => {
  const pacienteData = {
    cedula: 123456789,
    nombre: "John",
    apellido: "Doe",
    fecha: "1990-01-01",
    telefono: "1234567890",
  };

  const response = await request(app)
    .put("/actualizar_paciente/123456789")
    .send(pacienteData);
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty("nombre", "John");
}, 20000);

test("Debe eliminar un paciente existente", async () => {
  const response = await request(app).delete("/eliminar_paciente/123456789");
  expect(response.statusCode).toBe(200);
}, 20000);
