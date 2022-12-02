/**
 * Mongoose is a Object Data Modeling (ODM) library for MongoDB distributed as an npm package
 */
const mongoose = require('mongoose')

const DB_URL = process.env.MONGO_URI || "mongodb+srv://ngs-myblog:NuDrRHtK7quS3Cpn@myblog.tfrtibr.mongodb.net/?retryWrites=true&w=majority=test";

// const loadModels = require('../app/models')

/* mongoose.connect('mongodb+srv://blog_demo_nodejs:uHZTpzyCKlirboce@blog-demo-nodejs.b9pgir8.mongodb.net/?retryWrites=true&w=majority')
     .then(() => console.log('MongoDB Database Connected'))
     .catch(err => console.log(err)) */

module.exports = () => {
  const connect = () => {
    mongoose.Promise = global.Promise

    mongoose.connect(
      DB_URL,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        let dbStatus = '';
        if (err) {
          dbStatus = `*    Error connecting to DB: ${err}\n****************************\n`
        }
        dbStatus = `*    DB Connection: OK\n****************************\n`
        if (process.env.NODE_ENV !== 'test') {
          // Prints initialization
          console.log('****************************')
          console.log('*    Starting Server')
          console.log(`*    Port: ${process.env.PORT || 3000}`)
          console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`)
          console.log(`*    Database: MongoDB`)
          console.log(dbStatus)
        }
      }
    )
  }
  connect()

  mongoose.connection.on('error', console.log)
  mongoose.connection.on('disconnected', connect)

//   loadModels()
}
