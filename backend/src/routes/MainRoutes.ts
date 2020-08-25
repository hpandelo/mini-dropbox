import express from 'express';
import HomeController from '../controllers/HomeController';

const RoutesConstants: any = {
  PUBLIC: {
    ROOT: '/',
  }
};

const MainRoutes = express.Router();

MainRoutes.get(RoutesConstants.PUBLIC.ROOT, HomeController.root);

export { RoutesConstants, MainRoutes };