import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import mysql from "mysql2";

export default async function fetchSkill(req: Request, res: Response) {
  try {
    const { UserID } = req.body;

    const [Skill] = await (
      await connection
    ).query<mysql.RowDataPacket[]>("SELECT * FROM Skill WHERE UserID = ?", [
      UserID,
    ]);

    if (Skill.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Skill not found!" });
    }

    const userSkill = Skill[0];
    return res.status(200).json({ success: true, Skill: userSkill });
  } catch (error) {
    console.error("Error occurred:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
