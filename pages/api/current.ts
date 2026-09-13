import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const auth = await serverAuth(req, res);
    if(!auth || !auth.currentUser) {
      return res.status(405).end();
    }
    res.status(200).json(auth.currentUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
