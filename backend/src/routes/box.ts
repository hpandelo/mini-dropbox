import { Router } from 'express';
import BoxController from '../controllers/BoxController';

const BoxConstants: any = {
  PUBLIC: {
    BOXES: '/boxes',
  }
};

const BoxRoutes = Router();

BoxRoutes.post(BoxConstants.PUBLIC.BOXES, BoxController.store);

export { BoxConstants, BoxRoutes };