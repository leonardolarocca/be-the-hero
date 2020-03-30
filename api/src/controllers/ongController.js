const connection = require('../database/connection')
const GenerateUniqueId = require('../tests/utils/generateUniqueId')

module.exports = {
  async store (req, res) {
    const { name, email, whatsapp, city, uf } = req.body

    const id = GenerateUniqueId()

    try {
      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      })

      return res.json({ id })
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  },

  async index (req, res) {
    try {
      const ongs = await connection('ongs').select('*')

      return res.json(ongs)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
