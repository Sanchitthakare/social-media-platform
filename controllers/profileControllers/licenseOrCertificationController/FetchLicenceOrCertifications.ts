import { Request, Response } from "express";
import { connection } from "../../../DatabaseConnection";
import jwt from "jsonwebtoken";
import mysql from "mysql2";

export default async function fetchLicenseOrCertification(req: Request, res: Response) {
  try {

      const { UserID } = req.body;

      const [LicenseOrCertification] = await (await connection).query<mysql.RowDataPacket[]>("SELECT * FROM LicenseOrCertification WHERE UserID = ?", [UserID]);

      if (LicenseOrCertification.length === 0) {
        return res.status(404).json({ success: false, message: "LicenseOrCertification not found!" });
      }

      const userLicenseOrCertification = LicenseOrCertification[0];
      return res.status(200).json({ success: true, LicenseOrCertification: userLicenseOrCertification });

  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
