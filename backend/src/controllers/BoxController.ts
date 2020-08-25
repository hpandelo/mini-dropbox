import Box from "../models/Box";
import { BoxInterface } from "../models/types";

class BoxController {
  async store(req: any, res: any) {
    const { title } = req.body;

    const box: BoxInterface = await Box.create({ title });

    console.debug(`Box created: ${ box.title } @ ${ new Date(box.createdAt).toUTCString() }`);
    return res.send(box);
  }

  async getAll(req: any, res: any) {
    const boxes: Array<BoxInterface> = await Box.find();
    return res.json(boxes);
  }

  async get(req: any, res: any) {
    const id: string = req.params.id;
    const box: BoxInterface|null = await Box.findById(id).populate('files');
    return res.json(box);
  }
}

export default new BoxController(); 