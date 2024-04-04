import {config} from 'dotenv'
import { connectDB } from './db/connection.db.js'
import {app} from './app.js'

config()


connectDB().then(()=> {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`server is listening on PORT ${process.env.PORT || 8080}`)
    })
}).catch((error) => {
    console.log('Unable to connect with the server: ', error)
})
