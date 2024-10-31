import express, { Request, Response } from "express";
import cors from 'cors';

const app = express()
const port = 5252

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.post('/data', (req: Request, res: Response) => {
  res.send(`Thank you for your interest, ${req.body.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})