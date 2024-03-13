import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import jwt from "jsonwebtoken";
import mysql from "mysql2";

export default async function fetchWorkExprience(req: Request, res: Response) {
  try {


      const { UserID } = req.body;

      const [WorkExprience] = await (await connection).query<mysql.RowDataPacket[]>("SELECT * FROM WorkExprience WHERE UserID = ?", [UserID]);

      if (WorkExprience.length === 0) {
        return res.status(404).json({ success: false, message: "WorkExprience not found!" });
      }

      const userWorkExprience = WorkExprience[0];
      return res.status(200).json({ success: true, WorkExprience: userWorkExprience });

  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
