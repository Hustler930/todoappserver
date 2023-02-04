const {MongoClient, ServerApiVersion } = require('mongodb')
const dotenv = require('dotenv')
dotenv.config() 
const url = process.env.DBURL
const client = new MongoClient(`${url}`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})
const database = `${process.env.DBNAME }`

const pool = async(res,req) => {
    try{
        let result = await client.connect()
        let db = result.db(database)
        return(db.collection("todos"))
    }catch(err){
        console.error(err)
    }  
}


module.exports = pool



// user-name = AdarshGzz
// pass = mXGjmrdrZqgLN3OV



// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://AdarshGzz:<password>@todoapp.kae7dvt.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
