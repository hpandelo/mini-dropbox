import { Router } from 'express';
import multer from 'multer';
import FileController from '../controllers/FileController';
import multerConfig from '../config/multer';

const RoutesConstants: any = {
  PUBLIC: {
    DOWNLOAD: '/file/:filename',
    FILE: '/boxes/:id/files/:file_id',
    FILE_URL: '/boxes/:id/files/:file_id/url',
    FILES: '/boxes/:id/files',
    DIRECT_FILE: '/files/:file_id',
    DIRECT_FILE_URL: '/files/:file_id/url',
  }
};

const FileRoutes = Router();
const receivedFile = multer(multerConfig).single('file');

FileRoutes.post(RoutesConstants.PUBLIC.FILES, receivedFile, FileController.store);
FileRoutes.get(RoutesConstants.PUBLIC.FILES, FileController.getAll);
FileRoutes.get(RoutesConstants.PUBLIC.FILE, FileController.get);
FileRoutes.get(RoutesConstants.PUBLIC.DIRECT_FILE, FileController.get);
FileRoutes.get(RoutesConstants.PUBLIC.FILE_URL, FileController.getUrl);
FileRoutes.get(RoutesConstants.PUBLIC.DIRECT_FILE_URL, FileController.getUrl);
FileRoutes.get(RoutesConstants.PUBLIC.DOWNLOAD, FileController.download);

export default FileRoutes;