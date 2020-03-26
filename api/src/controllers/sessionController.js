const connection = require('../database/connection')

module.exports = {
  async store (req, res) {
    const { id } = req.body

    try {
      const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first()

      if (!ong) {
        return res.status(401).json({
          message: 'No ONG found with this ID'
        })
      }

      return res.json(ong)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
