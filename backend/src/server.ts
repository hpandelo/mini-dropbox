import express from 'express';
import { MainRoutes, RoutesConstants } from './routes/main'
import mongoose from 'mongoose';
import { BoxRoutes } from './routes/box';

const app: express.Application = express();

mongoose.connect(
  RoutesConstants.PRIVATE.MONGODB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(MainRoutes, BoxRoutes);

app.listen(RoutesConstants.PRIVATE.SERVER_PORT, () => {
  console.info("\n\n\tServer ready and listening @ port", RoutesConstants.PRIVATE.SERVER_PORT, "\n\n");
});