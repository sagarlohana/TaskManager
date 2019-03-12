require('./src/db/mongoose')
const Task = require('./src/models/task')

Task.findByIdAndRemove('5c86d54c6e67790160784a1a').then(() => {
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})