import Box from "../models/Box";
import { BoxInterface } from "../models/types";

class BoxController {
  async store(req: any, res: any) {
    const { title } = req.body;

    const box: BoxInterface = await Box.create({ title });

    console.debug(`Box created: ${ box.title } @ ${ new Date(box.createdAt).toUTCString() }`);
    return res.send(box);
  }
}

export default new BoxController(); 