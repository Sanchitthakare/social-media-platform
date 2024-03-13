import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import jwt from "jsonwebtoken";
import mysql from "mysql2";

export default async function deleteSkill(req: Request, res: Response) {
  try {
    const { SkillID } = req.body;
    console.log(SkillID);
    const insertQuery = "DELETE FROM Skill WHERE SkillID=?";
    const insertData = [SkillID];

    const [row] = await (
      await connection
    ).query<mysql.ResultSetHeader>(insertQuery, insertData);
    console.log("row", row.affectedRows);
    if (row.affectedRows === 1) {
      return res.status(201).json({
        firstTimelogin: true,
        success: true,
        message: "Skill deleted successfully",
      });
    }
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
