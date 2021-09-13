
import express , {Request, Response} from "express"
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()
app.use(cors());
 
app.get('/', function (req:Request, res:Response) {
  res.send('Hello World')
})

app.get('/api/articles', async function (req:Request, res:Response) {
  const allArticles = await prisma.article.findMany();
 
  res.send(allArticles)
})
 
 
app.listen(4000, () => console.log("Server is running..."))