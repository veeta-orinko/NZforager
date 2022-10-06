const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'dlvligu4y',
  api_key: '382856277631322',
  api_secret: 'C4NNaLtURmqpDP5WEJkxWljqbXY',
  secure: true,
})

module.exports = { cloudinary }
