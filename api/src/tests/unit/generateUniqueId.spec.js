const GenerateUniqueId = require('../utils/generateUniqueId')

describe('Generate unique ID', () => {
  it('Should generate and return an unique ID', () => {
    const id = GenerateUniqueId()
    expect(id).toHaveLength(8)
  })
})
