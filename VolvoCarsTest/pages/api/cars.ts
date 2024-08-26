import { NextApiRequest, NextApiResponse } from "next";
import data from "../../public/api/cars.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json(data);
};

export default handler;
