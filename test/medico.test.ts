import request from 'supertest';
import app from '../src/app';

describe('Medico Router', () => {
  it('should return all medicos', async () => {
    const response = await request(app).get('/medicos');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([])); // Aquí puedes agregar los datos esperados de los médicos
  });

  it('should create a new medico', async () => {
    const newMedico = {
      tarjetaProfesional: 12345,
      nombre: 'John',
      apellido: 'Doe',
      consultorio: 'Consultorio 1',
      correo: 'john.doe@example.com',
      idEspecialidad: 1,
    };

    const response = await request(app).post('/medicos').send(newMedico);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(newMedico);
  });

  it('should get a medico by tarjetaProfesional', async () => {
    const tarjetaProfesional = 12345;
    const response = await request(app).get(`/medicos/${tarjetaProfesional}`);
    expect(response.status).toBe(200);
    expect(response.body.tarjetaProfesional).toBe(tarjetaProfesional);
  });

  it('should update a medico', async () => {
    const tarjetaProfesional = 12345;
    const updatedMedico = {
      nombre: 'John',
      apellido: 'Smith',
    };

    const response = await request(app).put(`/medicos/${tarjetaProfesional}`).send(updatedMedico);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedMedico);
  });

  it('should delete a medico', async () => {
    const tarjetaProfesional = 12345;
    const response = await request(app).delete(`/medicos/${tarjetaProfesional}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Médico eliminado correctamente' });
  });
});
