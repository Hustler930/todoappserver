const {MongoClient , ServerApiVersion } = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()
const url = process.env.DBURL
const client = new MongoClient(`${url}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})
const database = `${process.env.DBNAME}`

const authPool = async(req,res)=>{
    try{
        let result = await client.connect()
        let db = result.db(database)
        return(db.collection('users'))

    }catch(err){
        console.error(err)
    }
}

module.exports = authPool