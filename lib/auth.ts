import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const verifyToken = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    let token = req.cookies["access-token"];

    console.log("JWT Secret", process.env.NEXT_PUBLIC_JWT_SECRET);

    if (!token)
      return res
        .status(403)
        .json({ message: "No Token, Authorization denied" });
    const verified = jwt.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET as string
    );
    req.body.user = verified;
    NextResponse.next();
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
