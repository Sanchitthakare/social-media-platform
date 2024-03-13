import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import mysql from "mysql2";

export default async function fetchHonorsAndAwards(req: Request, res: Response) {
  try {

      const { UserID } = req.body;

      const [HonorsAndAwards] = await (await connection).query<mysql.RowDataPacket[]>("SELECT * FROM HonorsAndAwards WHERE UserID = ?", [UserID]);

      if (HonorsAndAwards.length === 0) {
        return res.status(404).json({ success: false, message: "HonorsAndAwards not found!" });
      }

      const userHonorsAndAwards = HonorsAndAwards[0];
      return res.status(200).json({ success: true, HonorsAndAwards: userHonorsAndAwards });


  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
