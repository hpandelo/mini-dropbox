import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { MainRoutes } from './routes/MainRoutes'
import BoxRoutes from './routes/BoxRoutes';
import FileRoutes from './routes/FileRoutes';
import HomeController from './controllers/HomeController';

dotenv.config();
const ATLAS_URL: string = process.env.ATLAS_URL || '';
const SERVER_PORT: string = process.env.SERVER_PORT || '3001';

connect(
  ATLAS_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

const app: express.Application = express();

app.use(cors());
app.use(HomeController.interceptor);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(MainRoutes, BoxRoutes, FileRoutes);

app.listen(SERVER_PORT, () => {
  console.info("\n\n\tServer ready and listening @ port", SERVER_PORT, "\n\n");
});