import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import mysql from "mysql2"

export default async function addProfile(req: Request, res: Response) {
  try {

      const { UserID, Username, CoverImageURL, TitleOrTagLine, Bio } = req.body;

      const [existingProfiles] =await( await connection).query<mysql.RowDataPacket[]>("SELECT * FROM Profile WHERE UserID = ?", [UserID]);
      if (existingProfiles.length > 0) {
        const [updateResult] = await (await connection).query<mysql.ResultSetHeader>("UPDATE Profile SET `Username`=?, `CoverImageURL`=?, `TitleOrTagLine`=?, `Bio`=? WHERE UserID=?", [Username, CoverImageURL, TitleOrTagLine, Bio, UserID]);
        if (updateResult.affectedRows > 0)
          return res.json({ success: true, message: "Profile updated successfully!" });
        else
          return res.status(403).json({ success: false, message: "You can update only your profile!" });
      } else {
        const [insertResult] = await (await connection).query<mysql.ResultSetHeader>("INSERT INTO Profile (UserID, Username, CoverImageURL, TitleOrTagLine, Bio) VALUES (?, ?, ?, ?, ?)", [UserID, Username, CoverImageURL, TitleOrTagLine, Bio]);
        if (insertResult.affectedRows > 0)
          return res.status(200).json({ success: true, message: "New user profile inserted successfully!" });
        else
          return res.status(500).json({ success: false, message: "Error inserting new user profile" });
      }
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
