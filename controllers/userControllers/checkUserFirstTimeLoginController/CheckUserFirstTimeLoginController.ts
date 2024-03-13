// controllers/checkUserFirstTimeLoginController.ts
 
import { Request, Response } from "express";
import { connection } from "../../../SqlDatabaseConnection";
import bcrypt from "bcryptjs";
import mysql from "mysql2";
 
export default async function checkUserFirstTimeLogin(
  req: Request,
  res: Response
) {
  try {
    const { name, emailId, profileType, image, loggedInUsing } = req.body;
 
    if (!emailId || !name || !profileType || !loggedInUsing || !image) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }
    console.log("emailId", emailId);
 
    const password = loggedInUsing === "google" ? "google" : "linkedin";
 
    // Check if user already exists
    const [result] = await (
      await connection
    ).query<mysql.RowDataPacket[]>("SELECT * FROM User WHERE emailId = ?", [
      emailId,
    ]);
 
    console.log("result", result.length);
 
    if (result.length > 0) {
      return res.status(409).json({
        firstTimelogin: false,
        success: true,
        message: "User with this emailId already exists",
      });
    }
 
    // If user does not exist, insert into database
 
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
 
    const [row] = await (
      await connection
    ).query<mysql.ResultSetHeader>(
      "INSERT INTO User (name, emailId, password, profileType,Image) VALUES (?, ?, ?, ?,?)",
      [name, emailId, hashedPassword, profileType, image]
    );
    console.log("row", row.affectedRows);
 
    if (row.affectedRows === 1) {
      return res.status(201).json({
        firstTimelogin: true,
        success: true,
        message: "User created successfully",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}