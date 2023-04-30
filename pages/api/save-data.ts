import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      code,
      amount,
      order_id,
      card_holder,
      customer_phone,
      Shaparak_Ref_Id,
      custom,
    } = req.body;
    try {
      const payment = await prisma.payment.create({
        data: {
          code,
          amount,
          order_id,
          card_holder,
          customer_phone,
          Shaparak_Ref_Id,
          custom,
        },
      });
      res.status(201).json(payment);
    } catch (error) {
      res
        .status(500)
        .json({
          message:
            "Error saving data to database please check the request body",
        });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
