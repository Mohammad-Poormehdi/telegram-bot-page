import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const apiKey = "telegram";
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
    const requestApiKey = req.headers["x-api-key"];
    if (!requestApiKey) {
      return res.status(401).json({ message: "missing API key" });
    } else {
      if (requestApiKey !== apiKey) {
        return res.status(401).json({ message: "invalid API Key" });
      }
    }
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
      return res.status(201).json(payment);
    } catch (error) {
      return res.status(500).json({
        message: "Error saving data to database please check the request body",
      });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
