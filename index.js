import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Lets make Microalgae grow')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})