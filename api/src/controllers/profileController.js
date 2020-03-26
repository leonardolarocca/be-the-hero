const connection = require('../database/connection')

module.exports = {
  async index (req, res) {
    const ongId = req.headers.authorization

    try {
      const incidents = await connection('incidents')
        .where('ong_id', ongId)
        .select('*')

      return res.json(incidents)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
