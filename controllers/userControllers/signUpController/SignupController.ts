import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import bcrypt from "bcryptjs";
import mysql from "mysql2";

export default async function Signup(req: Request, res: Response) {
  try {
    const { Name, EmailId, Password, ProfileType, Image, Gender } = req.body;

    if (!Name || !EmailId || !Password || !ProfileType || !Gender) {
      return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }

    // Check if user already exists
    const [existingUser] = await (
      await connection
    ).query<mysql.RowDataPacket[]>("SELECT * FROM User WHERE EmailId = ?", [EmailId]);

    if (existingUser.length > 0) {
      return res.status(409).json({ success: false, message: "User with this EmailId already exists" });
    }

    // If user does not exist, insert into database
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(Password, salt);

    const [row] = await (
      await connection
    ).query<mysql.ResultSetHeader>(
      "INSERT INTO User (Name, EmailId, Password, ProfileType, Image, Gender) VALUES (?, ?, ?, ?, ?, ?)",
      [Name, EmailId, hashedPassword, ProfileType, Image, Gender]
    );

    if (row.affectedRows === 1) {
      return res.status(201).json({ success: true, message: "User created successfully" });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
