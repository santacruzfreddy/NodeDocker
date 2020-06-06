import { getUsers } from "../../controllers/user.controler";
import { Request } from "express";
var typeorm_1 = require("typeorm");

const mockRequest = {
    body: {
        firstName: 'J',
        lastName: 'Doe',
        email: 'jdoe@abc123.com',
        password: 'Abcd1234',
        passwordConfirm: 'Abcd1234',
        company: 'ABC Inc.',
    },
} as Request;

const mockResponse: any = {
    json: jest.fn(),
    status: jest.fn(),
};


describe('Metodos de pruebas sin rest API', () => {
    test('Conseguir los datos de un developer', () => {
        expect('Consegir').toBe('Consegir')
    })


    test('Conseguir los datos de un developer', () => {
        expect('').toBe('')
    })
})


describe('Metodos de pruebas con rest API', () => {
    beforeEach(() => {
    typeorm_1.createConnection()
    })

    test('debe devolver datos', async () => {
        const res = mockResponse;

        await getUsers(mockRequest, res);
        expect(res.status).toHaveBeenCalledWith(200);
      //  expect(res.json).toHaveBeenCalledWith({ username: 'hugo' });
    })



})
