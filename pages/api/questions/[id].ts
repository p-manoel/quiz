import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    id: +req.query.id,
    name: 'John Doe'
  })
}