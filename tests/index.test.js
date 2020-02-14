const STAGE = process.env.STAGE || 'testing'

const TARGET_URL =
  STAGE === 'testing' ? 'http://18.179.12.252' : 'http://52.195.0.40'

const axiosBase = require('axios')
const axios = axiosBase.create({
  baseURL: TARGET_URL
})

describe('check index', () => {
  it('get status', async () => {
    const response = await axios.get('/')
    expect(response.status).toEqual(200)
  })

  it('check contents', async () => {
    const response = await axios.get('/')
    expect(response.status).toEqual(200)
    const reg = new RegExp(STAGE, 'i')
    const isIncluding =  reg.test(response.data)
    expect(isIncluding).toEqual(true)
  })
})
