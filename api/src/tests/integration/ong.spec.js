const Request = require('supertest')
const api = require('../../api')
const connection = require('../../database/connection')

describe('ONG', () => {

  beforeEach(async () => {
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('Should be able to create a new ONG', async () => {
    const response = await Request(api)
      .post('/ongs')
      .send({
        name: 'ONG da Delícia',
        email: 'jailson.mendes@delicia.br.hue',
        whatsapp: '11999990000',
        city: 'San Pablo',
        uf: 'PR'
      })
      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toHaveLength(8)
  })
})
