import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routers/authRoutes.js'
import spotifyRoutes from './routers/spotifyRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/spotify', spotifyRoutes)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running on PORT ${PORT}`))
