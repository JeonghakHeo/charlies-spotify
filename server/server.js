import path from 'path'
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

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(
    express.static(
      path.join(__dirname, '../charlies-player/charlies-player/build')
    )
  )

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(
        path.join(__dirname, '../'),
        'charlies-player',
        'build',
        'index.html'
      )
    )
  )
}

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on PORT ${PORT}`))
