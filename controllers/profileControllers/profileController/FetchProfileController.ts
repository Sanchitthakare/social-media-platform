import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import mysql from "mysql2";

export default async function fetchProfile(req: Request, res: Response) {
  try {
    const { UserID } = req.body;

    const [profile] = await (
      await connection
    ).query<mysql.RowDataPacket[]>("SELECT * FROM Profile WHERE UserID = ?", [
      UserID,
    ]);

    if (profile.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found!" });
    }

    const userProfile = profile[0];
    return res.status(200).json({ success: true, profile: userProfile });
  } catch (error) {
    console.error("Error occurred:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
