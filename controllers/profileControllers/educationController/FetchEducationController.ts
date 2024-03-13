import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import jwt from "jsonwebtoken";
import mysql from "mysql2";

export default async function fetchEducation(req: Request, res: Response) {
  try {

      const { UserID } = req.body;

      const [Education] = await (await connection).query<mysql.RowDataPacket[]>("SELECT * FROM Education WHERE UserID = ?", [UserID]);

      if (Education.length === 0) {
        return res.status(404).json({ success: false, message: "Education not found!" });
      }

      const userEducation = Education[0];
      return res.status(200).json({ success: true, Education: userEducation });
      
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
