import { BoxInterface, FileInterface } from "../models/types";
import Box from "../models/Box";
import File from "../models/File";
import multerConfig from '../config/multer';

class FileController {
  async store(req: any, res: any) {
    const box: BoxInterface|null = await Box.findById(req.params.id);

    if (box === null) {
      res.status(400).send("Box not found");
    }

    const file: FileInterface = await File.create({
      title: req.file.originalname,
      path: req.file.key,
    });

    box?.files?.push(file);
    await box?.save();

    req.io.sockets.in(box?._id).emit("file", file);
    return res.json(file);
  }

  async getAll(req: any, res: any) {
    const files: Array<FileInterface> = await File.find();
    return res.json(files);
  }

  async get(req: any, res:any) {
    const fileId: string = req.params.file_id;
    const file: FileInterface|null = await File.findById(fileId);
    return res.json(file);
  }

  async getUrl(req: any, res:any) {
    const fileId: string = req.params.file_id;
    const file: FileInterface|null = await File.findById(fileId);

    return res.json(`${req.protocol}://${req.get('host')}/file/${file?.path}`);
  }

  async download(req: any, res:any) {
    const filename: string = req.params.filename;
    const path = multerConfig.dest

    res.download(`${path}/${filename}`);
  }
}

export default new FileController();