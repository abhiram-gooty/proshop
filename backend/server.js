import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import products from './data/products.js'

const port = process.env.PORT
const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/',(req,res)=>{
    res.send('Hello from the backend')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p)=>p._id === req.params.id)
    res.json(product)
})

app.listen(port,()=>{
    console.log('Server running')
})