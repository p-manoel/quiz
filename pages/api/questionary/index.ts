import type { NextApiRequest, NextApiResponse } from "next";
import { randomize } from "../../../functions/arrays";

import questions from "../questionsDB";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ids = questions.map(question => question.id)
  res.status(200).json(randomize(ids));
}