import { Router } from 'express';
import BoxController from '../controllers/BoxController';

const BoxConstants: any = {
  PUBLIC: {
    BOX: '/boxes/:id',
    BOXES: '/boxes',
  }
};

const BoxRoutes = Router();

BoxRoutes.post(BoxConstants.PUBLIC.BOXES, BoxController.store);
BoxRoutes.get(BoxConstants.PUBLIC.BOXES, BoxController.getAll);
BoxRoutes.get(BoxConstants.PUBLIC.BOX, BoxController.get);

export default BoxRoutes;