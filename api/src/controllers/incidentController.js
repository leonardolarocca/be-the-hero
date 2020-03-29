const connection = require('../database/connection')

module.exports = {
  async store (req, res) {
    const { title, description, value } = req.body
    const ongId = req.headers.authorization

    try {
      const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id: ongId
      })

      return res.json(id)
    } catch (err) {
      return res.status(400).send({ message: err.message })
    }
  },

  async index (req, res) {
    const { page = 1 } = req.query
    const [count] = await connection('incidents').count()

    try {
      const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
          'incidents.*',
          'ongs.name',
          'ongs.email',
          'ongs.whatsapp',
          'ongs.city',
          'ongs.uf'
        ])

      res.header('X-Total-Count', count['count(*)'])
      return res.json(incidents)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  },

  async destroy (req, res) {
    const { id } = req.params
    const ongId = req.headers.authorization

    try {
      const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()

      if (incident.ong_id !== ongId) {
        return res.status(401).json({ message: 'operation not permitted' })
      }

      await connection('incidents').where('id', id).delete()

      return res.status(204).send()
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}
