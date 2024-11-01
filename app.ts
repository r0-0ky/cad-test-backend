import express, { Request, Response } from "express";
import cors from 'cors';
import Helmet from "helmet";

const app = express()
const port = 3030

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://cutletka.ru:2300',
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(Helmet());
app.use(express.json());
app.post('/data', (req: Request, res: Response) => {
  res.send(`Thank you for your interest, ${req.body.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})