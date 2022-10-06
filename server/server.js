const express = require('express')
const path = require('path')
const server = express()
const plantRoute = require('./routes/edible_plants')
// const { cloudinary } = require('./utils/cloudinary')
// let cors = require('cors')

// server.use(cors())

server.use(express.json())
// server.use(express.urlencoded({ limit: '50mb', extended: true }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/plants', plantRoute)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

// get cloudinary images
server.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
    .expression('folder:dev_setups')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()

  const publicIds = resources.map((file) => file.public_id)
  res.send(publicIds)
})

// cloudinary upload
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
