// controllers/checkUserFirstTimeLoginController.ts

import { Request, Response } from "express";
import { connection } from "../../SqlDatabaseConnection";
import mysql from "mysql2";

export default async function preRegistration(req: Request, res: Response) {
  try {
    const {
      Name,
      MailId,
      StartUpName,
      ProfileType,
      WhatsAppNo,
      LinkedinProfile,
    } = req.body;

    if (!Name || !MailId || !ProfileType || !WhatsAppNo) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    if (Name.length > 80 && Name.length < 2)
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 80 characters",
      });
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(MailId))
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    if (/^[6-9]\d{9}$/.test(WhatsAppNo))
      return res.status(400).json({
        success: false,
        message: "Please enter a valid WhatsApp number",
      });
    if (/https?:\/\/\S+/gi.test(LinkedinProfile))
      return res.status(400).json({
        success: false,
        message: "Please enter a valid LinkedIn profile link",
      });

    const [rows] = await (
      await connection
    ).query<mysql.RowDataPacket[]>(
      "SELECT * FROM PreRegistration WHERE MailId = ? OR WhatsAppNo = ?",
      [MailId, WhatsAppNo]
    );

    if (rows.length > 0) {
      return res.status(400).json({
        firstTimelogin: false,
        success: false,
        message: "User already Pre-Registered",
      });
    }

    const [row] = await (
      await connection
    ).query<mysql.ResultSetHeader>(
      "INSERT INTO PreRegistration (Name, MailId, StartUpName, ProfileType, WhatsAppNo,LinkedinProfile) VALUES (?, ?, ?, ?, ?,?)",
      [Name, MailId, StartUpName, ProfileType, WhatsAppNo, LinkedinProfile]
    );

    if (row.affectedRows === 1) {
      return res.status(201).json({
        success: true,
        message: "Pre-Registered successfully",
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
