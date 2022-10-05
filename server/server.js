const express = require('express')
const path = require('path')
const server = express()
const plantRoute = require('./routes/edible_plants')
const { cloudinary } = require('./utils/cloudinary')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/plants', plantRoute)

server.use(express.json({ limit: '50mb' }))
server.use(express.urlencoded({ limit: '50mb', extended: true }))

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

server.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'dev_setups',
    })
    console.log(uploadedResponse)
    res.json({ msg: 'yay' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ err: 'something went wrongggg' })
  }
})

const port = process.env.PORT || 3001
server.listen(port, () => {
  console.log('listening on 3001, idk why ')
})

module.exports = server
