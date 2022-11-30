require('dotenv-safe').config();

const { Seeder} = require('mongo-seeding');
const path = require('path');

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://ngs-myblog:NuDrRHtK7quS3Cpn@myblog.tfrtibr.mongodb.net/?retryWrites=true"; 

const config = {
    database: MONGO_URI,
    inputPath: path.resolve(__dirname, './database/seeds'),
    dropDatabase: false
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(path.resolve(__dirname, './database/seeds'));

const main = async () => {
    try {
        await seeder.import(collections)
        console.log('Seed complete!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}

main()