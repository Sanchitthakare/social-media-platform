import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import mysql from "mysql2";

export default async function addSkills(req: Request, res: Response) {
  try {
    const { Skill_ProfileID, Skill } = req.body;
    console.log(Skill_ProfileID);
    const insertQuery =
      "INSERT INTO Skill (Skill_ProfileID, Skill) VALUES (?, ?)";
    const insertData = [Skill_ProfileID, Skill];
    const [row] = await (
      await connection
    ).query<mysql.ResultSetHeader>(insertQuery, insertData);
    console.log("row", row.affectedRows);
    if (row.affectedRows === 1) {
      return res.status(201).json({
        firstTimelogin: true,
        success: true,
        message: "Skills added successfully",
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
