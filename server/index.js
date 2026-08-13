import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { userRoute } from './routes/userRoute.js'
import { residencyRoute } from './routes/residencyRoute.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

// app.use(cors())
const allowedOrigins = [
    "http://localhost:5173",
    "https://real-estate-1-client.vercel.app",
    "https://real-estate-1-client-pb13at3jf-sharayu234s-projects.vercel.app"
]

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Real Estate API is running')
})

app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)

export default app