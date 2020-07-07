import cors from 'cors';
import express from 'express';
import { connect } from 'mongoose';
import { MainRoutes, RoutesConstants } from './routes/MainRoutes'
import BoxRoutes from './routes/BoxRoutes';
import FileRoutes from './routes/FileRoutes';
import HomeController from './controllers/HomeController';

connect(
  RoutesConstants.PRIVATE.MONGODB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

const app: express.Application = express();

app.use(cors());
app.use(HomeController.interceptor);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(MainRoutes, BoxRoutes, FileRoutes);

app.listen(RoutesConstants.PRIVATE.SERVER_PORT, () => {
  console.info("\n\n\tServer ready and listening @ port", RoutesConstants.PRIVATE.SERVER_PORT, "\n\n");
});