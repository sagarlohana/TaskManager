// CRUD create read update delete
const { MongoClient, ObjectID }  = require ('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017/mydb"
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log(error.message)
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 19
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    console.log('Connected correctly!')
}) 