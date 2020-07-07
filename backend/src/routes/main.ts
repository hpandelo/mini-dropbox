import dotenv from 'dotenv';
import express from 'express';
import HomeController from '../controllers/HomeController';

dotenv.config();

const RoutesConstants: any = {
  PRIVATE: {
    SERVER_PORT: process.env.SERVER_PORT,
    MONGODB: process.env.ATLAS_URL,
  },
  PUBLIC: {
    ROOT: '/',
  }
};

const MainRoutes = express.Router();

MainRoutes.get(RoutesConstants.PUBLIC.ROOT, HomeController.root);

export { RoutesConstants, MainRoutes };